import levelHeading from "../components/ui/header";
import logoHeader from "../components/icons/logo-header";
import makeElement from "../utils/makeElement";
import tagline from "../components/ui/tagline";
import { getStore } from "../redux/store";
import toDoTemplate from "../components/cards/toDo";
import classes from "../components/cards/classes";
import addButton from "../components/ui/addButton";
import Router from "../router/router";
import {v4 as uuidv4} from 'uuid';

const todoPage = function(){
    // Header
    const div = document.createElement('div')
    div.classList.add('page-header2')
    const h1 = levelHeading('h1', 'Ze\'s App', 'page-header2')
    const h2 = tagline('h2', 'A way to organize your classes!', 'tagline-head2')
    div.appendChild(makeElement(logoHeader()))
    div.appendChild(h1)   
    div.appendChild(h2)   

    function onDeleteClass(e){
        const toDoId = {id:e.currentTarget.dataset.key}
        Router('/delete', toDoId)
    }

    function onEditClass(e){
        const toDoId = {id:e.currentTarget.dataset.key}
        Router('/edit', toDoId)
    }

    function onAddClass(e){
        const toDoId = {id:uuidv4().substr(0,8)}
        Router('/add', toDoId)
    }

    // List
    const todoList = getStore()
    const container = toDoTemplate()
    if(todoList !== null){
        const ul = container.querySelector('ul')
        const elements = todoList.map(x => classes(x))
        elements.forEach(element => {
            element.querySelector('#delete').addEventListener('click', onDeleteClass) 
            element.querySelector('#edit').addEventListener('click', onEditClass)     
            ul.append(element)
        })
        div.appendChild(container)
    }

    // Add button
    const buttonAdd = addButton()
    buttonAdd.addEventListener('click', onAddClass)
    div.appendChild(buttonAdd)
    
    return div
}

export {todoPage}