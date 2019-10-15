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

        default: 
            return state; 
    } 
}