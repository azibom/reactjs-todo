let first = {
  status : "show_all"
}

export const filter = (state = first, action) => {
    switch(action.type) {
      case 'DELETE_STORAGE':
          return {}
       case 'SHOW_ALL':
         return {
           status : "show_all"
         }
      case 'SHOW_DONE':
          return {

            status : 'show_done'
          }
      case 'SHOW_UNDERDONE':
        return {
          status : 'show_underdone'
        }
       default:
         return state;
     }
  };