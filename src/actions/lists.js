const API_URL = 'https://sitejet-api.herokuapp.com/'

export const getLists = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_LISTS'})
        return fetch(API_URL + '/lists')
        .then(resp => resp.json())
        .then(lists => { dispatch({type: "FETCH_LISTS", payload: lists})})
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

export const deleteList = (list_id) =>{
console.log('deleting goal')
let data = {
    method: 'DELETE',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
}
return () => {
    fetch(API_URL + `/lists/${list_id}`, data)
    }
}