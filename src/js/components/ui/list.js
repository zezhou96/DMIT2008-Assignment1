import makeElement from "../../utils/makeElement"

const listElement = function (elementType='li', label="default"){
    const template = `<${elementType}> ${label} </ ${elementType}>`
    const element = makeElement(template)

    return element
}

export default listElement