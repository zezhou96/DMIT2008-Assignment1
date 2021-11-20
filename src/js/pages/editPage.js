import logoHeader from "../components/icons/logo-header"
import button from "../components/ui/button"
import levelHeading from "../components/ui/header"
import tagline from "../components/ui/tagline"
import Router from "../router/router"
import makeElement from "../utils/makeElement"
import { getStore } from "../redux/store"
import reducer from "../redux/reducers"
import formTemplate from "../components/cards/formTemplate"

const cancelButton = button("cancel")
const editButton = button("edit")

const editPage = function(props){
    
    function cleanup(){
        cancelButton.removeEventListener('click', onCancelEdit)
        editButton.removeEventListener('click', onEditClass)
    }
    function onCancelEdit(e){
        cleanup()
        Router('/todo')
    }

    function onEditClass(e){
        if (props !== null){
            Router('/todo')
            const editClass = Object.assign({}, {id:todoForm.querySelector('#ID').value}, {category:todoForm.querySelector('#Category').value}, {isComplete:todoForm.querySelector('#isCompleted').checked}, {title:todoForm.querySelector('#title').value}, {startDate:todoForm.querySelector('#startDate').value}, {startTime:todoForm.querySelector('#startTime').value}, {endDate:todoForm.querySelector('#endDate').value}, {endTime:todoForm.querySelector('#endTime').value})
            const index = getStore().findIndex(classes => classes.id === props.id)
            const action = {
                type:"edit",
                payload:{index, editClass},
                cb:()=> Router('/todo')
            }

            reducer(action)
            cleanup()
        }
    }

    // Header
    const div = document.createElement('div')
    div.classList.add('page-header2')
    const h1 = levelHeading('h1', 'Ze\'s App', 'page-header2')
    const h2 = tagline('h2', 'A way to organize your classes!', 'tagline-head2')
    const title = levelHeading('h1', 'Edit Class Item', 'page-header-editPage')

    // Selected list item form
    const todoItem = getStore().find(classes => classes.id === props.id)
    const todoForm = formTemplate(todoItem)

    // Buttons
    cancelButton.addEventListener('click', onCancelEdit)
    editButton.addEventListener('click', onEditClass)

    // Append elements
    div.appendChild(makeElement(logoHeader()))
    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(title)
    div.appendChild(todoForm)
    div.appendChild(cancelButton)
    div.appendChild(editButton)

    return div
}

export default editPage