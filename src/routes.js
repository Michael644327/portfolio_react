import Home from './pages/Home';
import Calacular from './pages/javascripts/pages/calacular';
import BookList from './pages/javascripts/pages/booklist';
import AnimalPara from './pages/bootstrap/index';

const routes = [
  { path: "/portfolio", element: Home, name: "Home" },
  {
    name: "課堂作業",
    children: [
      { path: "/portfolio/classwork/js/pages/calacular", element: Calacular, name: "計算機" },
      { path: "/portfolio/classwork/js/pages/booklist", element: BookList, name: "書本清單篩選" },
    ]
  },
  { path: "/portfolio/pages/bootstrap", element: AnimalPara, proj: "AnimalPara", title: "動物樂園", name: "動物樂園" },
  { path: "/portfolio/bootstrap/faq", element: "/portfolio/bootstrap/faq", title:"常見問題" },
  {
    name: "作品集",
    children: [
      { path: "/portfolio/pages/bootstrap", element: AnimalPara, name: "動物樂園" },
    ]
  },
];

export default routes;