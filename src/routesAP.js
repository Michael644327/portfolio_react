import AnimalPara from './pages/animalpara/index';
import AboutPage from './pages/animalpara/about';
import ContactPage from './pages/animalpara/contact';
import FunnyPage from './pages/animalpara/funny';
import ProductPage from './pages/animalpara/product';
import StorePage from './pages/animalpara/store';

const routesBt = [
  { path: "/portfolio/animalpara", element: AnimalPara, proj: "AnimalPara", title: "動物樂園", name: "首頁" },
  { path: "/portfolio/animalpara/about", element: AboutPage, proj: "AnimalPara", title:"關於動物", name:"關於動物" },
  { path: "/portfolio/animalpara/funny", element: FunnyPage, proj: "AnimalPara", title:"動物趣聞", name:"動物趣聞" },
  { path: "/portfolio/animalpara/contact", element: ContactPage, proj: "AnimalPara", title:"聯絡我們", name:"聯絡我們" },
  { path: "/portfolio/animalpara/product", element: ProductPage, proj: "AnimalPara", title:"常見問題", name:"常見問題" },
  { path: "/portfolio/animalpara/store", element: StorePage, proj: "AnimalPara", title:"商品一覽", name:"商品一覽" },
];

export default routesBt;