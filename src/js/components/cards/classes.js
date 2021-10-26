import makeElement from "../../utils/makeElement";

const classes = function({id, category, title, endDate, isComplete}){
    const template = `
    <li class = "listItemLI" data-key="${id}"> 
        <div>       
            <p><span>${title}</span></p>
            <p><b>Category:</b> ${category}</p>
            <p><b>Due:</b> ${endDate}</p>
            <p>${isComplete ? "Complete": " "}</p>
        </div>
        <p class="listButton"><button>Edit</button><button>Delete</button></p>
    </li>
    `;

    return makeElement(template)
}

export default classes;