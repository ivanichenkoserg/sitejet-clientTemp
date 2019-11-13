export default ( state = {lists: [], loading: false}, action ) => {
    switch (action.type) {
        case 'LOADING_LISTS':
            return {
                ...state, 
                loading: true
            }
        
        case "FETCH_LISTS":
            return {
                lists: action.payload,
                loading:false 
            }
        
        case 'ADD_LIST': 
            return {
                ...state, 
                loading: true 
            }
        
        case 'LIST_ADDED':
            return {
                lists:[...state.lists, action.payload],
                loading:false
            }

        default: 
            return state; 
    } 
}