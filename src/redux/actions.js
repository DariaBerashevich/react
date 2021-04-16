//actions
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"
export const SUBMIT_EDIT = "SUBMIT_EDIT"

export function addTodo(todo){
    return {
        type: "ADD_TODO",
        payload:todo
    }
}
export function toggleComplete(id){
    return {
        type: "TOGGLE_COMPLETE",
        id
    }
}
export function deleteToDo(todo){
    return{
        type:"DELETE_TODO",
        payload:todo
    
    }
}
export function editToDo(id){
    return{
        type:"EDIT_TODO",
        id
    
    }
}
export function submitEdit(todo){
    return{
        type:"SUBMIT_EDIT",
        payload:todo.name,
        id:todo.id
    
    }
}