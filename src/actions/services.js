export const getServices = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SERVICES'})
        return fetch('../services')
        .then(resp => resp.json())
        .then(services => dispatch({type: "FETCH_SERVICES", payload: services}))
    }
} 

export const addService = (service) => {
    return (dispatch) => {
        dispatch({type: 'ADD_SERVICE'})
        fetch('../services', {
            method: 'POST',
            body: JSON.stringify(service),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(resp => resp.json())
        .then(service => dispatch({type: 'SERVICE_ADDED', payload: service}))
    }
}

export const deleteService = (service_id) =>{
    console.log('deleting goal')
    let data = {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    }
    return dispatch => {
        fetch(`/services/${service_id}`, data)
            .then(response => response.json())
            .then(service => dispatch({
            type: 'SERVICE_DELETED',
            payload: service
            }))
            .catch(err => err)
        }
    }
