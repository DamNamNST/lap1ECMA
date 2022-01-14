
import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailNewsPage from "./pages/detailnewpage";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

import AdminDashboard from "./pages/admindashboard";
import AdminNews from "./pages/adminNews";
import AdminNewsAdd from "./pages/adminNewsAdd";
import AdminNewsEdit from "./pages/adminNewsEdit";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
        printHeader(HeaderPage.render());
        printFooter(FooterPage.render());
    },
    "/about": () => {
        print(AboutPage.render());
        printHeader(HeaderPage.render());
        printFooter(FooterPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
        printHeader(HeaderPage.render());
        printFooter(FooterPage.render());
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        print(DetailNewsPage.render(value.data.id));
        printHeader(HeaderPage.render());
        printFooter(FooterPage.render());
    },
    "/signup": () => {
        print(SignUp.render());
        printHeader("");
        printFooter("");
    },
    "/signin": () => {
        print(SignIn.render());
        printHeader("");
        printFooter("");
    },
    "/admin/dashbroad": () => {
        print(AdminDashboard.render());
        printHeader(AdminHeader.render());
        printFooter("");
    },
    "/admin/news": () => {
        print(AdminNews.render());
        printHeader(AdminHeader.render());
        printFooter("");
    },
    "/admin/news/add": () => {
        print(AdminNewsAdd.render());
        printHeader(AdminHeader.render());
        printFooter("");
    },
    "/admin/news/:id/edit": (value) => {
        console.log(value.data.id);
        print(AdminNewsEdit.render(value.data.id));
        printHeader(AdminHeader.render());
        printFooter("");
    },

    
});

router.notFound(() => print("Not Found Page"));

router.resolve();

