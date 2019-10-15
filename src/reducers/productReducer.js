export default ( state = {products: [], loading: false}, action ) => {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state, 
                loading: true
            }
        
        case "FETCH_PRODUCTS": 
            return {
                products: action.payload,
                loading:false 
            }
        
        case 'ADD_PRODUCT': 
            console.log("Got to add a product")
            return {
                ...state, 
                loading: true 
            }
        
        case 'PRODUCT_ADDED':
            console.log('Added product')
            return {
                products:[...state.products, action.payload],
                loading:false
            }

        default: 
            return state; 
    } 
}