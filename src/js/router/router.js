import { homePage } from "../pages/home";
import { todoPage } from "../pages/toDoPage";
import { errorPage } from "../pages/pageNotFound";

const Router = function(pathname){
    const routes = {
        "/": homePage(),
        "/todo": todoPage(),
        "/error": errorPage()   //ErrorPage
    }

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    app.appendChild(routes[window.location.pathname])
}

export default Router