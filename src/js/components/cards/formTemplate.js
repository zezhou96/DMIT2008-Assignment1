import makeElement from "../../utils/makeElement";

const formTemplate = function({id, category, isComplete, title, startDate, startTime, endDate, endTime}){
    const template = `
        <form data-key="${id}" class="classForm">
            <div>
                <label>ID</label>
                <input type="text" id="ID" value="${id}">
            </div>
            <div class="classFormFlex">
                <div>
                    <label>Category</label>
                    <input type="text" id="Category" value="${category}">
                </div>
                <div>
                    <label>Completed</label>
                    <input type="checkbox" id="isCompleted" ${isComplete? "checked": ""} value="${isComplete}">
                </div>
            </div>
            <div>
                <label>Class Name</label>
                <input type="text" id="title" value="${title}">
            </div>
            <div class="classFormFlex">
                <div>
                    <label>Start Date</label>
                    <input type="text" id="startDate" value="${startDate}">
                </div>
                <div>
                    <label>Start Time</label>
                    <input type="text" id="startTime" value="${startTime}">
                </div>
            </div>
            <div class="classFormFlex">
                <div>
                    <label>End Date</label>
                    <input type="text" id="endDate" value="${endDate}">
                </div>
                <div>
                    <label>End Time</label>
                    <input type="text" id="endTime" value="${endTime}">
                </div>
            </div>
        </form>
    `;

    return makeElement(template)
}

export default formTemplate