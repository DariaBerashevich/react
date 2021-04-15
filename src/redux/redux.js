import {createStore} from 'redux';

//actions
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

//reducer
let reducer = (state = [] , action) => {
    let ToDoList;
    let newToDoList;
    let ToDoListChunk;
    switch(action.type){
        case "ADD_TODO":
            ToDoList = [...state];
            ToDoList.push(action.payload);
            return ToDoList;
        case "TOGGLE_COMPLETE":
            return state.map(
                todo =>
                  todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
              );
         case "DELETE_TODO":
             ToDoList = [...state]
             let index = ToDoList.indexOf(action.payload)
             newToDoList =  ToDoList.splice(0,index)
             ToDoListChunk = ToDoList.slice(1,ToDoList.length)
             return [...newToDoList,...ToDoListChunk];
        case "EDIT_TODO":
            return state.map(
                todo =>   todo.id === action.id ? { ...todo, edit: !todo.edit } : todo
              );
    }
    return state;
}

//store
export let store = createStore(reducer);

