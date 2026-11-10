/** Brand guide for AI promo banner generation. Keep in sync with README and Cloudflare Worker. */
export const BRAND_BANNER_COLORS = {
  primary: '#893144',
  primaryLight: '#A8475C',
  primaryDark: '#671E2F',
  secondary: '#C59253',
  secondaryLight: '#DFC397',
  secondaryDark: '#8E5F2B',
  softCream: '#F6E3E1',
  cleanIvory: '#FDF7F7',
  dustyRose: '#D87B84',
} as const;

export const BRAND_BANNER_STYLE = [
  'Premium boutique florist look for Zaloma Florist, Malang.',
  'Elegant serif headline feel, real flowers, warm formal mood, quiet spacing.',
  'No neon colors, cartoons, clip-art, watermarks, or cluttered layouts.',
  'Promo text must follow the admin prompt only. Do not invent discounts or products.',
].join(' ');

export const BRAND_BANNER_SIZES = {
  desktop: { label: 'Desktop', ratio: '2:1', note: 'Wide hero layout with centered offer text.' },
  mobile: { label: 'Mobile', ratio: '1080:776', note: 'Compact mobile layout with large readable offer text.' },
} as const;
