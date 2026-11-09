export interface CityItem {
  name: string;
  slug: string;
  image?: string;
  description?: string;
  province_name?: string;
  seoTitle?: string;
  seoDescription?: string;
  tagline?: string;
}

export function cityToSlug(cityName: string): string {
  if (!cityName) return '';
  const clean = cityName.trim().toLowerCase();

  if (clean.includes('malang raya')) return 'malang-raya';
  if (clean === 'kota malang') return 'kota-malang';
  if (clean === 'kota batu') return 'kota-batu';
  if (clean === 'kabupaten malang' || clean === 'kab. malang') return 'kabupaten-malang';
  if (clean.includes('mana saja') || clean.includes('seluruh indonesia')) return 'bisa-dikirim-ke-mana-saja';

  return clean
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export function productMatchesCity(productCity: string | undefined | null, targetCityName: string): boolean {
  if (!targetCityName) return true;
  const tNorm = targetCityName.toLowerCase();

  if (tNorm.includes('mana saja')) return true;

  const pNorm = (productCity || 'Malang Raya').toLowerCase();
  if (pNorm.includes('mana saja') || pNorm.includes('seluruh indonesia')) return true;
  if (pNorm === tNorm) return true;

  if (tNorm.includes('malang raya') && (pNorm.includes('malang') || pNorm.includes('batu'))) return true;
  if (pNorm.includes('malang raya') && (tNorm.includes('malang') || tNorm.includes('batu'))) return true;

  return pNorm.includes(tNorm) || tNorm.includes(pNorm);
}
