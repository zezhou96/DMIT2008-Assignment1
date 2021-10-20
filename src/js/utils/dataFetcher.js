const dataFetcher = async function(){
    const url = './data/todos.json'
    const response = await fetch(url);
    const toDoJSON = await response.json();
    
    return toDoJSON;
}

export default dataFetcher