import AnimalPara from './pages/bootstrap/index';
import AboutPage from './pages/bootstrap/about';
import ContactPage from './pages/bootstrap/contact';
import FaqPage from './pages/bootstrap/faq';
import ProductPage from './pages/bootstrap/product';
import StorePage from './pages/bootstrap/store';

const routesBt = [
  { path: "/portfolio/pages/bootstrap", element: AnimalPara, proj: "AnimalPara", title: "動物樂園", name: "首頁" },
  { path: "/portfolio/pages/bootstrap/about", element: AboutPage, proj: "AnimalPara", title:"關於動物", name:"關於動物" },
  { path: "/portfolio/pages/bootstrap/faq", element: FaqPage, proj: "AnimalPara", title:"常見問題", name:"常見問題" },
  { path: "/portfolio/pages/bootstrap/contact", element: ContactPage, proj: "AnimalPara", title:"聯絡我們", name:"聯絡我們" },
  { path: "/portfolio/pages/bootstrap/product", element: ProductPage, proj: "AnimalPara", title:"常見問題", name:"常見問題" },
  { path: "/portfolio/pages/bootstrap/store", element: StorePage, proj: "AnimalPara", title:"商品一覽", name:"商品一覽" },
];

export default routesBt;