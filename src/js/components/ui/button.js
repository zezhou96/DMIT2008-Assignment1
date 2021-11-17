import makeElement from "../../utils/makeElement";

const button = function(label="ui button") {
    const template = `<button class="anyButton">${label}</button>`
    const element = makeElement(template)

    return element
}

export default button