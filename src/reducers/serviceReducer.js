export default ( state = {services: [], loading: false}, action ) => {
    switch (action.type) {
        case 'LOADING_SERVICES':
            return {
                ...state, 
                loading: true
            }
        
        case "FETCH_SERVICES": 
            return {
                services: action.payload,
                loading:false 
            }
        
        case 'ADD_SERVICE': 
            console.log("Got to add a service")
            return {
                ...state, 
                loading: true 
            }
        
        case 'SERVICE_ADDED':
            console.log('Added service')
            return {...state,
                services: action.payload,
                loading:false
            }
        
        case 'DELETE_SERVICE': 
            return {
                ...state, 
                loading: true 
            }

        case 'SERVICE_DELETED':
        console.log('Deleted service')

        return {...state, loading: false
        }

        default: 
            return state; 
    } 
}