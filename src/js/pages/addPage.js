import formTemplate from "../components/cards/formTemplate"
import logoHeader from "../components/icons/logo-header"
import button from "../components/ui/button"
import levelHeading from "../components/ui/header"
import tagline from "../components/ui/tagline"
import reducer from "../redux/reducers"
import Router from "../router/router"
import makeElement from "../utils/makeElement"

const cancelButton = button("cancel")
const addButton = button("add")

const addPage = function(props){   
    
    function cleanup(){
        cancelButton.removeEventListener('click', onCancelAdd)
        addButton.removeEventListener('click', onAddClass)
    }
    
    function onCancelAdd(e){
        cleanup()
        Router('/todo')
    }

    function onAddClass(e){
        Router('/todo')
        const addClass = Object.assign(Object.assign({}, {id:todoForm.querySelector('#ID').value}, {category:todoForm.querySelector('#Category').value}, {isComplete:todoForm.querySelector('#isCompleted').checked}, {title:todoForm.querySelector('#title').value}, {startDate:todoForm.querySelector('#startDate').value}, {startTime:todoForm.querySelector('#startTime').value}, {endDate:todoForm.querySelector('#endDate').value}, {endTime:todoForm.querySelector('#endTime').value}))
        const action = {
            type:"add",
            payload:{addClass},
            cb:()=> Router('/todo')
        }

        reducer(action)
        cleanup()
    }

    // Header
    const div = document.createElement('div')
    div.classList.add('page-header2')
    const h1 = levelHeading('h1', 'Ze\'s App', 'page-header2')
    const h2 = tagline('h2', 'A way to organize your classes!', 'tagline-head2')
    const title = levelHeading('h1', 'Add Class Item', 'page-header-editPage')

    // New Item form
    const todoItemId = {id:props.id}
    const todoForm = formTemplate(todoItemId)

    // Buttons
    cancelButton.addEventListener('click', onCancelAdd)
    addButton.addEventListener('click', onAddClass)

    // Append elements
    div.appendChild(makeElement(logoHeader))
    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(title)
    div.appendChild(todoForm)
    div.appendChild(cancelButton)
    div.appendChild(addButton)

    return div
}

export default addPage