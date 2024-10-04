import Home from './pages/Home';
import Calacular from './pages/javascripts/pages/calacular';
import BookList from './pages/javascripts/pages/booklist';
import Login from './pages/javascripts/pages/login';
import AnimalPara from './pages/animalpara/index';

const routes = [
  { path: "/", element: Home, name: "首頁" },
  {
    name: "功能練習",
    children: [
      { path: "/classwork/calacular", element: Calacular, name: "計算機" },
      { path: "/classwork/booklist", element: BookList, name: "書本清單篩選" },
      { path: "/classwork/login", element: Login, name: "登入" },
    ]
  },
{
    name: "作品集",
    children: [
      { path: "/animalpara", element: AnimalPara, name: "動物樂園" },
      { path: "https://github.com/Michael644327/knock2-project", name:"密室逃脫-悄瞧 (github)" , ltype:"outside"}
    ]
  },
  {
    name: "VUE練習",
    path: "/vue/"
  },
  { path: "/classwork/login", element: Login }

];

export default routes;