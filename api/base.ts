import axios, { AxiosError } from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
// import { AuthContext } from "../store/AuthContext";
// import getInvoiceValue from "../utils/getInvoiceValue";

// const authContext = useContext(AuthContext)
const apiURL = 'http://localhost:8000';

export const axiosClient = axios.create({
    baseURL: apiURL,
});

axiosClient.interceptors.request.use((req) => {
    req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return req;
})

export const APISettings = {
    setAPIToken: (token: string, handleTokenExpired: () => unknown) => {
        axiosClient.interceptors.request.use((req) => {
            req.headers["x-access-token"] = token
            return req;
        })

        axiosClient.interceptors.response.use((res) => {
            return res
        }, (error) => {
            console.log("react to error", error)
            if ( error instanceof AxiosError ) {
                if ( error && error.response?.data === "Invalid Token" ) {
                    handleTokenExpired()
                }
                if(error.response?.data) {
                    toast.error(error.response?.data);
                }
            }
        })
    }
}