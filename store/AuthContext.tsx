import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import { APISettings } from "../api/base";
import { UserAPI } from "@/api/apis/UserAPI";
import { useAsync } from "@/utils/useAsync";

const TOKEN_NAME = "token"

export const AuthContext = createContext<null | {
    login: (token: string | null) => unknown,
    logout: () => unknown,
    isAuthenticated: () => unknown,
    user: any
}>(null)

export const AuthContextProvider = (props: { children: ReactNode }) => {
    
    const [ token, setToken ] = useState<string | null>(null)
    const [ user, setUser ] = useState<any>()
    const [ loaded, setLoaded ] = useState(false);
    const { execute, value } = useAsync(UserAPI.me)
    
    const handleLogout = () => {
        setToken(null)
        removeCookies(TOKEN_NAME)
        // setLoaded(false);
    }

    useEffect(() => {
        if(value){
            setUser(value?.data.user);
        }
    }, [value])

    useEffect(() => {
        if (token) {
            APISettings.setAPIToken(handleLogout)
            execute({});
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
                    setCookies(TOKEN_NAME, token, { maxAge: 60 * 30 })
                },
                logout: handleLogout,
                isAuthenticated: () => {
                    return !!token;
                },
                user
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