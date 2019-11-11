const API_URL = 'https://firesale-api.herokuapp.com'

export const getProducts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_PRODUCTS'})
        return fetch(API_URL + '/products')
        .then(resp => resp.json())
        .then(products => {
            dispatch({type: "FETCH_PRODUCTS", payload: products})
        })
    }
}  
  
export const addProduct = (product) => {
    return (dispatch) => {
        dispatch({type: "ADD_PRODUCT"}, product)
        return fetch(API_URL + '/lists', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(product => dispatch({type: 'PRODUCT_ADDED', payload: product}))
    }
}

export const deleteProduct = (product_id) =>{
console.log('deleting goal')
let data = {
    method: 'DELETE',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
}
return () => {
    fetch(API_URL + `/products/${product_id}`, data)
    }
}