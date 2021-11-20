import { getStore, updateStore } from "./store";

function reducer(action){
    switch(action.type){
        case "delete":
            const store = getStore();
            const index = action.payload.index;
            const newStore = [...store.slice(0,index), ...store.slice(index + 1)]
            updateStore(newStore)
            action.cb()
        return "remove employee";
        case "edit": 
            const editStore = getStore();           
            const editProps = action.payload.editClass;
            const editIndex = action.payload.index;
            const editNewStore = [...editStore.slice(0, editIndex), editProps, ...editStore.slice(editIndex + 1)]
            updateStore(editNewStore)
            action.cb()
        return "edit employee";
        case "add": 
            const addStore = getStore();
            const addProps = action.payload.addClass;
            const addNewStore = [...addStore, addProps]
            updateStore(addNewStore)
            action.cb()
        return "add new employee";
        default: return store
    }
}

export default reducer