import { createStore } from "./redux/store";
import Router from "./router/router";
import dataFetcher from "./utils/dataFetcher";

const app = document.querySelector("#app")

const onAppInit = async function(e){
    let todoData = await dataFetcher()

    createStore(todoData)
    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)