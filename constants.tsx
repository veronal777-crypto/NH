
import { NavItem, ServiceCard, NewsItem } from './types';

import newsTrophyImg from './assets/images/news_trophy.png';
import newsAppleFarmImg from './assets/images/news_apple_farm.png';
import newsEventBoxImg from './assets/images/news_event_box.png';

export const COLORS = {
  primary: '#1457a2', // Updated from NH Green to requested Blue
  secondary: '#F7E01E', // NH Yellow
  accent: '#0e3d75',
  dark: '#111827',
  light: '#F3F4F6',
};

// ... (existing exports NAV_ITEMS, SUB_NAV_ITEMS, TOP_SERVICES, DARK_GRID_SERVICES)
export const NAV_ITEMS: NavItem[] = [
  { label: '보험상품', href: '#' },
  { label: '다이렉트', href: '#' },
  { label: '보상서비스', href: '#' },
  { label: '마이페이지', href: '#' },
];

export const SUB_NAV_ITEMS: NavItem[] = [
  { label: '기업정보', href: '#' },
  { label: '공시실', href: '#' },
  { label: '이벤트', href: '#' },
  { label: '고객센터', href: '#' },
];

export const TOP_SERVICES: ServiceCard[] = [
  { id: 1, title: '보험계약조회', icon: 'fa-file-contract', color: 'bg-blue-50' },
  { id: 2, title: '보험료납입', icon: 'fa-credit-card', color: 'bg-green-50' },
  { id: 3, title: '보험금청구', icon: 'fa-file-invoice-dollar', color: 'bg-red-50' },
  { id: 4, title: '보험계약대출', icon: 'fa-hand-holding-dollar', color: 'bg-yellow-50' },
  { id: 5, title: '증명서발급', icon: 'fa-certificate', color: 'bg-purple-50' },
];

export const DARK_GRID_SERVICES = [
  { title: '농업인 특화 보험', description: '농협만의 신뢰를 담은 맞춤형 보장', size: 'large' },
  { title: '운전자보험', description: '교통사고로 인한 상해 까지 탄탄보장', size: 'medium' },
  { title: '미니보험 (MZ)', description: '가볍고 합리적인 원데이 보장', size: 'medium' },
  { title: 'AI 챗봇 코지', description: '24시간 스마트한 상담 서비스', size: 'small' },
  { title: '스마트 보상청구', description: '간편하게 접수하는 사고 보상', size: 'small' },
  { title: '마이데이터 분석', description: '데이터로 만나는 나만의 보험', size: 'medium' },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'NH농협손보, 2025 대한민국 금융대상 수상',
    excerpt: '고객 중심 경영과 디지털 혁신 노력을 인정받아 영예의 대상을 수상했습니다.',
    date: '2025.01.20',
    imageUrl: newsTrophyImg,
    category: '보도자료',
  },
  {
    id: 2,
    title: 'ESG 친환경 영농 보험 출시 안내',
    excerpt: '탄소중립 실천 농가를 위한 보험료 할인 혜택이 강화된 신상품을 출시했습니다.',
    date: '2025.01.15',
    imageUrl: newsAppleFarmImg,
    category: '상품소식',
  },
  {
    id: 3,
    title: '디지털 플랫폼 리뉴얼 기념 이벤트',
    excerpt: '새로워진 NH농협손보 앱을 체험하고 푸짐한 경품 혜택을 받아보세요.',
    date: '2025.01.10',
    imageUrl: newsEventBoxImg,
    category: '이벤트',
  },
];