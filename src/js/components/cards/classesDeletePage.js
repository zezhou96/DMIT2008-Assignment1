import makeElement from "../../utils/makeElement";

const classItemDeletePage = function({id, category, title, endDate, isComplete}){
    const template = `
    <li class = "listItemLI" data-key="${id}"> 
        <div>       
            <p><span>${title}</span></p>
            <p><b>Category:</b> ${category}</p>
            <p><b>Due:</b> ${endDate}</p>
            <p class=completeItem>${isComplete ? "<b>Complete</b>": " "}</p>
        </div>        
    </li>
    `;

    return makeElement(template)
}

export default classItemDeletePage;