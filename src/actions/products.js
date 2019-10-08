export const getProducts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_PRODUCTS'})
        return fetch('../products')
        .then(resp => resp.json())
        .then(products => dispatch({type: "FETCH_PRODUCTS", payload: products}))
    }
} 

export const addProduct = (product) => {
    return (dispatch) => {
        dispatch({type: "ADD_PRODUCT"}, product)
        return fetch('../products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(product => dispatch({type: 'PRODUCT_ADDED', payload: product}))
    }
}

// export const deleteProduct = (product_id) =>{
//     console.log('deleting goal')
//     let data = {
//       method: 'DELETE',
//       body: JSON.stringify(product),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }
//       fetch(`./products/${product_id}`, data)
//         .then(response => response.json())
//         .then(product => console.log(product))
//         // .then(product => dispatch({ type: 'PRODUCT_DELETED', payload: product}))
//     }

export const deleteProduct = (product_id) => {
    return (dispatch) => {
        dispatch({type: "DELETE_PRODUCT"}, product_id)
        debugger; 
        return fetch(`./products/${product_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp => console.log(resp.json()))
        .then(product => dispatch({type: 'PRODUCT_DELETED', payload: product}))
    }
}