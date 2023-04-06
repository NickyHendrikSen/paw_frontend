import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import { APISettings } from "../api/base";

const TOKEN_NAME = "token"

export const AuthContext = createContext<null | {
    login: (token: string | null) => unknown,
    logout: () => unknown,
    isAuthenticated: () => unknown
}>(null)

export const AuthContextProvider = (props: { children: ReactNode }) => {
    
    const [ token, setToken ] = useState<string | null>(null)
    const [ loaded, setLoaded ] = useState(false);
    
    const handleLogout = () => {
        setToken(null)
        removeCookies(TOKEN_NAME)
    }

    useEffect(() => {
        if (token) {
            APISettings.setAPIToken(token, handleLogout)
            setLoaded(true)
        }
    }, [token])

    useEffect(() => {
        const cookieToken = getCookie(TOKEN_NAME)?.toString()
        if (cookieToken) {
            setToken(cookieToken)
        } else {
            setLoaded(true)
        }
    }, [])

    if ( !loaded ) {
        return null;
    }

    return (
        <AuthContext.Provider
            value={{
                // userToken: token,
                // company: company,
                login: (token: string | null) => {
                    // console.log(params);
                    // setToken(params.token)
                    if(!token) return;
                    
                    setToken(token)
                    setCookies(TOKEN_NAME, token)
                },
                logout: handleLogout,
                isAuthenticated: () => {
                    return !!token;
                }
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if ( context === null ) {
        throw new Error(`Attempted to read context value outside of provider`)
    }

    return context;
}
