import { axiosClient } from "../base";
import objectToUrlEncoded from "@/utils/objectToUrlEncoded";

export const UserAPI = {
    
    register: async(params: {
      name: string,
      email: string,
      password: string,
      confirmPassword: string,
    }) => {
      const response = await axiosClient.post('/register', {
          name: params.name,
          email: params.email,
          password: params.password,
          confirmPassword: params.confirmPassword
        })
      return response;
    },
    login: async(params: {
      email: string,
      password: string,
    }) => {
      const response = await axiosClient.post('/login', {
          email: params.email,
          password: params.password
        })
      return response;
    },
    me: async() => {
      const response = await axiosClient.get('/me')
      
      return response;
    },
}