import AnimalPara from './pages/animalpara/index';
import AboutPage from './pages/animalpara/about';
import ContactPage from './pages/animalpara/contact';
import FunnyPage from './pages/animalpara/funny';
import ProductPage from './pages/animalpara/product';
import ProductDetailPage from './pages/animalpara/product/[product_id]';
import StorePage from './pages/animalpara/store';

const routesBt = [
  {
    path: "/animalpara", element: AnimalPara,
    proj: "AnimalPara", title: "動物樂園", name: "首頁"
  },
  {
    path: "/animalpara/about", element: AboutPage,
    proj: "AnimalPara", title: "關於動物", name: "關於動物"
  },
  {
    path: "/animalpara/funny", element: FunnyPage,
    proj: "AnimalPara", title: "動物趣聞", name: "動物趣聞", h2Title: "true"
  },
  {
    path: "/animalpara/store", element: StorePage,
    proj: "AnimalPara", title: "門市介紹", name: "門市介紹", h2Title: "true"
  },
  {
    path: "/animalpara/product", element: ProductPage,
    proj: "AnimalPara", title: "商品一覽", name: "商品一覽", h2Title: "true"
  },
  {
    path: "/animalpara/contact", element: ContactPage,
    proj: "AnimalPara", title: "聯絡我們", name: "聯絡我們", h2Title: "true"
  },
  {
    path: "/animalpara/product/:product_id", element: ProductDetailPage,
    proj: "AnimalPara"
  }
];

export default routesBt;