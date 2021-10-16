const makeElement = function (tempString=``){
    const docFragment = document.createRange().createContextualFragment(tempString)
    const element = docFragment.children[0]
    return element 
}

export default makeElement