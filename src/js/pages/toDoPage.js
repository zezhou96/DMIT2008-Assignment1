import levelHeading from "../components/ui/header";
import logoHeader from "../components/icons/logo-header";
import makeElement from "../utils/makeElement";
import tagline from "../components/ui/tagline";
import { getStore } from "../redux/store";
import toDoTemplate from "../components/cards/toDo";
import classes from "../components/cards/classes";

const todoPage = function(){
    // Header
    const div = document.createElement('div')
    div.classList.add('page-header2')
    const h1 = levelHeading('h1', 'Ze\'s App', 'page-header2')
    const h2 = tagline('h2', 'A way to organize your classes!', 'tagline-head2')
    div.appendChild(makeElement(logoHeader()))
    div.appendChild(h1)   
    div.appendChild(h2)   

    // List
    const todoList = getStore()
    const container = toDoTemplate()
    if(todoList !== null){
        const ul = container.querySelector('ul')
        const elements = todoList.map(x => classes(x))
        elements.forEach(element => ul.append(element))
        div.appendChild(container)
    }
    
    return div
}

export {todoPage}