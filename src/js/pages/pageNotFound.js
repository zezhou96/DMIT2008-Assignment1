import levelHeading from "../components/ui/header";
import logoHeader from "../components/icons/logo-header";
import errorLogo from "../components/icons/error-logo";
import makeElement from "../utils/makeElement";
import { link } from "../components/ui/link";
import tagline from "../components/ui/tagline";

const errorPage = function(){
    const header = document.createElement('header')
    header.classList.add('page-header2')
    const h1 = levelHeading('h1', 'Ze\'s App', 'page-header2')
    const h2 = tagline('h2', 'A way to organize your classes!', 'tagline-head2')
    const errorMsg404 = tagline('h2', '404 ERROR', 'h2-error404')
    const errorMsg = tagline('h2', 'Uh Oh! Seems like we can\'t find the page you were looking for. Sorry!', 'h2-error')
    const linkElement = link('Take me home', '/', 'link-error')
    header.appendChild(makeElement(logoHeader()))
    header.appendChild(h1)   
    header.appendChild(h2)   
    header.appendChild(makeElement(errorLogo()))
    header.appendChild(errorMsg404)
    header.appendChild(errorMsg)
    header.appendChild(linkElement)

    return header
}

export {errorPage}