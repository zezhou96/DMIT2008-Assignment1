import makeElement from "../../utils/makeElement";

const addButton = function() {
    const template = `<div class="buttonAddDiv"><button class="buttonAdd">+</button></div>`
    const element = makeElement(template)

    return element
}

export default addButton