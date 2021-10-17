import levelHeading from "../components/ui/header";
import logo from "../components/icons/logo";
import makeElement from "../utils/makeElement";
import { link } from "../components/ui/link";
import tagline from "../components/ui/tagline";

const homePage = function(){
    const header = document.createElement('header')
    header.classList.add('page-header')
    const h1 = levelHeading('h1', 'Ze\'s App', 'page-header')
    const h2 = tagline('h2', 'A way to organize your classes!', 'tagline-head')
    const linkElement = link('to do app', '/todo', 'link-head')
    const linkElementError = link('Error Page', '/error', 'link-head')
    header.appendChild(makeElement(logo()))
    header.appendChild(h1)   
    header.appendChild(h2)   
    header.appendChild(linkElement)
    header.appendChild(linkElementError) // Error Page

    return header
}

export {homePage}