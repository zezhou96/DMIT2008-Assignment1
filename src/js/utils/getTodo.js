import dataFetcher from "./dataFetcher"
import listElement from "../components/ui/list"

const getTodo = async function(){
    const todoData = await dataFetcher()

    const divElm = document.createElement('ul')
    divElm.classList.add('listItem')
    const liCategory = listElement('li', todoData[0].category)
    const liTitle = listElement('li', todoData[0].title)
    const liDueDate = listElement('li', todoData[0].endDate)
    const liCompleted = listElement('li', todoData[0].isComplete)

    divElm.appendChild(liCategory)
    divElm.appendChild(liTitle)
    divElm.appendChild(liDueDate)
    divElm.appendChild(liCompleted)

    return divElm
}

export default getTodo