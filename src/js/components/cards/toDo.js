import makeElement from "../../utils/makeElement";

const toDoTemplate = function(){
    const template = `
    <aside id="toDoAside" class="listAside">
        <ul id="toDoList" class="listItemUL">
        
        </ul>
    </aside>
    `

    return makeElement(template)
}

export default toDoTemplate