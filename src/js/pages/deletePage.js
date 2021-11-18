import { getStore } from "../redux/store"
import Router from "../router/router"
import reducer from "../redux/reducers"
import button from "../components/ui/button"
import levelHeading from "../components/ui/header"
import tagline from "../components/ui/tagline"
import logoHeader from "../components/icons/logo-header"
import makeElement from "../utils/makeElement"

const cancelButton = button("cancel")
const deleteButton = button("delete")

const deletePage = function(props){
    function cleanup(){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onDeleteClass) 
    }
    
    function onCancelDelete(e){
        cleanup()
        Router('/todo')
    }

    function onDeleteClass(e){
        if (props !== null) {
            Router('/todo')
            const removeClass = props
            console.log(props)
            const index = getStore().findIndex(classes => classes.id === removeClass.id)
            console.log(removeClass.id)
            console.log(index)
            const action = {
                type:"delete",
                payload:{index},
                cb:()=> Router('/todo')
            }
            
            reducer(action)
            cleanup()
        }
    }
    
    const div = document.createElement('div')
    div.classList.add('page-header2')
    const h1 = levelHeading('h1', 'Ze\'s App', 'page-header2')
    const h2 = tagline('h2', 'A way to organize your classes!', 'tagline-head2')
    cancelButton.addEventListener('click', onCancelDelete)
    deleteButton.addEventListener('click', onDeleteClass)
    div.appendChild(makeElement(logoHeader()))
    div.appendChild(h1)   
    div.appendChild(h2)  
    div.appendChild(cancelButton)
    div.appendChild(deleteButton)

    return div
}

export default deletePage