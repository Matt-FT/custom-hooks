import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


 

 const init = () =>{
   return JSON.parse ( localStorage.getItem('todos')) || []; 
 }
export const useTodos = () => {
  
    const [ todos, dispatchTodo ] = useReducer( todoReducer, [] , init )
  
   
    useEffect(() => {
      
     localStorage.setItem( 'todos', JSON.stringify( todos ) );
      
    }, [todos])
    
    
    const handleNewTodo = ( todo ) =>{
      const action = {
       type: '[TODO] add Todo',
       payload: todo,
      }
   
      dispatchTodo( action );
    }
   
    const handleDeleteTodo = ( id ) =>{
      
     dispatchTodo({
       type: '[TODO] Remove Todo',
       payload: id,
      });
   
    }
   
    const handleToggleTodo = ( id ) =>{
      
     dispatchTodo({
       type: '[TODO] Toggle Todo',
       payload: id,
      });
   
    }
    const todosCount = () =>{
        return todos.length
    }

    const pending = () => {
       return  todos.filter( todo => !todo.done ).length
    }

    return{
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount,
        pending
    }

}
