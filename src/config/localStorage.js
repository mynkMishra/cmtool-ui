


export const getLocalStorage = (key)=>{

    return window.localStorage.getItem(key)

}

export const setLocalStorage = (key, value) =>{

    window.localStorage.setItem(key, value)
}

export const deleteLocalStorage = (key) =>{

    window.localStorage.removeItem(key)

}

export const isLocalStorageEmpty = () => {

    return window.localStorage.length === 0
}

export const clearLocalStorage = () =>{ 
    window.localStorage.clear()
}