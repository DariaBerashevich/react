import { ADD_TODO, EDIT_TODO, DELETE_TODO,TOGGLE_COMPLETE,SUBMIT_EDIT } from './actions';
import {createStore} from 'redux';

//reducer
let reducer = (state = [] , action) => {
    let toDoList;
    let newToDoList;
    let toDoListChunk;
    switch(action.type){
        case ADD_TODO:
            toDoList = [...state];
            toDoList.push(action.payload);
            return toDoList;
        case TOGGLE_COMPLETE:
            return state.map(
                todo =>
                  todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
              );
         case DELETE_TODO:
             toDoList = [...state]
             let index = toDoList.indexOf(action.payload)
             newToDoList =  toDoList.splice(0,index)
             toDoListChunk = toDoList.slice(1,toDoList.length)
             return [...newToDoList,...toDoListChunk];
        case EDIT_TODO:
            return state.map(
                todo => todo.id === action.id ? { ...todo, edit: !todo.edit } : todo
              );
        case SUBMIT_EDIT:
        return state.map(
            todo => todo.id === action.id ? {...todo,name:action.payload} : todo
          );
        default: return state;
            }
}

export let store = createStore(reducer);

export default reducer;