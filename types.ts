
export interface NavItem {
  label: string;
  href: string;
}

export interface CardItem {
  id: number;
  title: string;
  description: string;
  category: string;
  tag?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  icon: string;
  color: string;
}
