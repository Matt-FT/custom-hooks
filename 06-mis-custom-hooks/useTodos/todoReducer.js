import {todoReducer} from './todoReducer';

export const todoReducer = ( initState= [], action ) => {
  
    switch (action.type) {
        case '[TODO] add Todo':
            
        return [ ...initState, action.payload ]
       
        case '[TODO] Remove Todo':
            
        return initState.filter( todo => todo.id !== action.payload );
    
        case '[TODO] Toggle Todo':

        return initState.map( todo =>{

            if( todo.id === action.payload ){
                return{
                    ...todo,
                    done: !todo.done
                }
            }

          return todo;
        });
        default:
            
        return initState;
    }
}
