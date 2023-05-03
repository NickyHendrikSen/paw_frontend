import axios, { AxiosError } from "axios";
import { getCookie } from "cookies-next";
// import { AuthContext } from "../store/AuthContext";
// import getInvoiceValue from "../utils/getInvoiceValue";

// const authContext = useContext(AuthContext)
const TOKEN_NAME = "token"
const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const axiosClient = axios.create({
    baseURL: apiURL,
});

// axiosClient.interceptors.request.use((req) => {
//     req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//     return req;
// })

var interceptor: any = null;

export const APISettings = {
    setAPIToken: (handleTokenExpired: () => unknown) => {
        if(interceptor) {
            axiosClient.interceptors.request.eject(interceptor);
        }
        interceptor = axiosClient.interceptors.request.use((req) => {
            req.headers["Authorization"] = 'Bearer ' + getCookie(TOKEN_NAME)?.toString()
            return req;
        })

        axiosClient.interceptors.response.use((res) => {
            return res
        }, (error) => {
            console.log("react to error", error)
            if ( error instanceof AxiosError ) {
                if ( error && error.response?.data.message === "jwt expired" ) {
                    handleTokenExpired()
                }
                // if(error.response?.data) {
                //     toast.error(error.response?.data);
                // }
            }
            throw error;
        })
    }
}