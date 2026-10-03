export type Region = 
  | 'Konkan'
  | 'Western Maharashtra'
  | 'Marathwada'
  | 'Vidarbha'
  | 'Khandesh';

export interface District {
  id: string;
  name: string;
  marathiName: string;
  slug: string;
  region: Region;
  description: string;
  featuredCrafts: string[];
  heritageCount: number;
  artisanCount: number;
  image: string;
  heroImage?: string;
  coordinates: {
    x: number; // percentage on map representation (0-100)
    y: number; // percentage on map representation (0-100)
  };
  highlights: string[];
  svgPath?: string;
  svgCenter?: {
    x: number;
    y: number;
  };
}

export interface HeritageCategory {
  id: string;
  name: string;
  marathiName: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export interface HeritageItem {
  id: string;
  title: string;
  marathiTitle: string;
  slug: string;
  districtId: string;
  districtName: string;
  region: Region;
  category: string;
  categorySlug: string;
  summary: string;
  description: string;
  materials: string[];
  technique: string;
  culturalSignificance: string;
  historicalEra?: string;
  artisanCommunity?: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
  tags: string[];
}

export interface Artisan {
  id: string;
  name: string;
  marathiName: string;
  craft: string;
  craftMarathi: string;
  district: string;
  location: string;
  bio: string;
  quote: string;
  experienceYears: number;
  generation: string;
  image: string;
  heritageItemId?: string;
  specialty: string;
}

export interface StatMetric {
  label: string;
  value: string;
  marathiLabel: string;
  description: string;
}
