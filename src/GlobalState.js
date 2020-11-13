import React, {createContext, useState, useEffect} from 'react';
import { ProductsAPI, UserAPI } from './utils';
import axios from 'axios';

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)

    const refreshToken = async () => {
        const res = await axios.get('/users/refresh_token')
        console.log(res)
        setToken(res.data.accesstoken)
    }

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    }, [])

    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserAPI(token)
    }

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}

// Global State menampung state secara global