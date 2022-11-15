import AboutUs from "../views/pages/AboutUs";
import Article from "../views/pages/Article";
import Detail from "../views/pages/detail";
import Find from "../views/pages/Find";
import Home from "../views/pages/Home";

const routes = {
    '/': Home, // default page
    '/Article': Article,
    '/Find': Find,
    '/AboutUs': AboutUs,
    '/Detail/:id': Detail,

};

export default routes;