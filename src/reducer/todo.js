export const todo = (state = [], action) => {
    switch(action.type) {
       case 'DELETE_STORAGE':
         return []
         case 'ADD_TODO':
            return [
               ...state,
               {
                 id : action.id,
                 text : action.text,
                 complete : false
               }
            ]
        case 'TOGGLE_TODO':
        return state.map(todo => (todo.id === action.id)
          ? {
              ...todo,
              complete : !todo.complete
            }
          : todo)

       default:
         return state;
     }
  };