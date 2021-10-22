import { createStore } from "./redux/store";
import Router from "./router/router";
import dataFetcher from "./utils/dataFetcher";

const app = document.querySelector("#app")
Router(window.location.pathname)

const onAppInit = async function(e){
    let todoData = await dataFetcher()

    createStore(todoData)
}

window.addEventListener('load', onAppInit)