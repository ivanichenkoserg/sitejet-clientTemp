const API_URL = 'https://sitejet-api.herokuapp.com/'

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
  
export const addList = (list) => {
    return (dispatch) => {
        dispatch({type: "ADD_LIST"}, list)
        return fetch(API_URL + '/lists', {
            method: 'POST',
            body: JSON.stringify(list),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(list => dispatch({type: 'LIST_ADDED', payload: list}))
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