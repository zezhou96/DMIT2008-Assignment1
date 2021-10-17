import { homePage } from "../pages/home";
import { todoPage } from "../pages/toDoPage";

const Router = function(pathname){
    const routes = {
        "/": homePage(),
        "/todo": todoPage()
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