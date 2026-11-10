import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../data/supabaseConfig';
import { cityToSlug, type CityItem } from '../data/cities';

export async function fetchSupabaseCities(): Promise<CityItem[]> {
  const endpoint = new URL(`${SUPABASE_URL}/rest/v1/products`);
  endpoint.searchParams.set('slug', 'eq._cities_config_');
  endpoint.searchParams.set('select', 'description');
  endpoint.searchParams.set('limit', '1');

  const response = await fetch(endpoint, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase returned ${response.status} ${response.statusText}`);
  }

  const rows: unknown = await response.json();
  if (!Array.isArray(rows)) {
    throw new Error('Supabase returned an invalid city configuration response.');
  }

  const description = rows[0]?.description;
  if (typeof description !== 'string' || description.trim() === '') return [];

  const configuredCities: unknown = JSON.parse(description);
  if (!Array.isArray(configuredCities)) {
    throw new Error('The Supabase city configuration is not an array.');
  }

  const cities: CityItem[] = [];
  const seenSlugs = new Set<string>();

  for (const entry of configuredCities) {
    const city = typeof entry === 'string' ? { name: entry } : entry;
    if (!city || typeof city !== 'object' || typeof city.name !== 'string') continue;

    const name = city.name.trim();
    const slug = typeof city.slug === 'string' && city.slug.trim()
      ? city.slug.trim()
      : cityToSlug(name);

    if (!name || !slug || seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);

    cities.push({
      name,
      slug,
      image: typeof city.image === 'string'
        ? city.image
        : typeof city.image_url === 'string'
          ? city.image_url
          : '',
      description: typeof city.description === 'string' ? city.description : '',
      province_name: typeof city.province_name === 'string'
        ? city.province_name
        : typeof city.province === 'string'
          ? city.province
          : '',
      seoTitle: typeof city.seoTitle === 'string' ? city.seoTitle : undefined,
      seoDescription: typeof city.seoDescription === 'string' ? city.seoDescription : undefined,
      tagline: typeof city.tagline === 'string' ? city.tagline : undefined,
    });
  }

  return cities;
}
