import { createStore } from "./redux/store";
import Router from "./router/router";
import dataFetcher from "./utils/dataFetcher";
import keyGenerator from "./utils/key";

const app = document.querySelector("#app")

const onAppInit = async function(e){
    let todoData = await dataFetcher()

    if(todoData[0].id === undefined){
        todoData = [...keyGenerator(todoData)]
    }

    createStore(todoData)
    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)