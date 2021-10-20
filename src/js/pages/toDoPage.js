import levelHeading from "../components/ui/header";
import logoHeader from "../components/icons/logo-header";
import makeElement from "../utils/makeElement";
import tagline from "../components/ui/tagline";
import getTodo from "../utils/getTodo";
import listElement from "../components/ui/list";

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
    const listItem = getTodo()
    console.log(listItem)
    // header.appendChild(listItem) // breaks
    
    return header
}

export {todoPage}