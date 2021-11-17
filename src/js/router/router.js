import { homePage } from "../pages/home";
import { todoPage } from "../pages/toDoPage";
import { errorPage } from "../pages/pageNotFound";
import deletePage from "../pages/deletePage";

const Router = function(pathname){
    const routes = {
        "/": homePage(),
        "/todo": todoPage(),
        "/delete": deletePage()
    }

    const isValidRoute = Object.keys(routes).find(key => key === pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    if (isValidRoute === undefined) {
        app.appendChild(errorPage())
    }
    else {
        app.appendChild(routes[window.location.pathname])
    }    
}

export default Router