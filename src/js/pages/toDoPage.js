import levelHeading from "../components/ui/header";
import logoHeader from "../components/icons/logo-header";
import makeElement from "../utils/makeElement";
import tagline from "../components/ui/tagline";
import { getStore } from "../redux/store";
import toDoTemplate from "../components/cards/toDo";
import classes from "../components/cards/classes";

const todoPage = function(){
    // Header
    const header = document.createElement('header')
    header.classList.add('page-header2')
    const h1 = levelHeading('h1', 'Ze\'s App', 'page-header2')
    const h2 = tagline('h2', 'A way to organize your classes!', 'tagline-head2')
    header.appendChild(makeElement(logoHeader()))
    header.appendChild(h1)   
    header.appendChild(h2)   

    // List
    const todoList = getStore()
    const container = toDoTemplate()
    if(todoList !== null){
        const ul = container.querySelector('ul')
        const elements = todoList.map(x => classes(x))
        elements.forEach(element => ul.append(element))
        header.appendChild(container)
    }
    
    return header
}

export {todoPage}