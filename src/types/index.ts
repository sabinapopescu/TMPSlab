export type Category = 'cercei' | 'coliere' | 'bratari' | 'seturi' | 'setuar-lariat' | 'asimetric' | 'bow';
export type Metal = 'auriu' | 'argintiu' | 'rose';
export type PearlType = 'freshwater' | 'baroque' | 'seed' | 'cultured';

export interface Product {
  id: string;
  handle: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  price: {
    amount: number;
    currency: 'MDL' | 'EUR';
  };
  images: string[];
  video?: string;
  categories: Category[];
  tags: string[];
  metal: Metal;
  pearl: {
    type: PearlType;
    sizeMM: number[];
  };
  stock: number;
  madeToOrder?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: string;
  productIds: string[];
}

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}
