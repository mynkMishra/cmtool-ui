







export const GET_API_CALL = (api_url, token = null)=>{

    return fetch(api_url,{
        method: 'GET',
        headers: {
            'Authorization': 'token' + token,
        }
    })
    .then(res => res.json().then(json => ({
        headers : res.headers,
        status : res.status,
        data : json
    })))
    .then(({headers, status, data}) => {
        console.log(headers)
        console.log(status)
        console.log(data)
        return Promise.resolve({headers, status, data})
    })
    .catch(error => {
        return Promise.reject(error)
    })
}

export const POST_API_CALL = (api_url, token, body)=>{
    return fetch(api_url,{
        method: 'POST',
        headers: {
            'Authorization': 'token' + token,
            "Content-Type" : "application/json"
        },
        body: body
    })
    .then(async res =>{

            return {
                headers : res.headers.get("Authorization"),
                status : res.status,
                data : await res.json()
            }
    })
    .then(({headers, status, data}) => {
        console.log(headers)
        console.log(status)
        console.log(data)
        return Promise.resolve({headers, status, data})
    })
    .catch(error => {
        return Promise.reject(error)
    })
}