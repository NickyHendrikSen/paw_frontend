import { axiosClient } from "../base";
import objectToUrlEncoded from "@/utils/objectToUrlEncoded";

export const ProductAPI = {
    
    getProducts: async(params: {
      categories?: string,
      search?: string
    }) => {
      const response = await axiosClient.get('/products', {params: {
        ...(params.categories && {categories: params.categories}),
        ...(params.search && {search: params.search}),
      }})
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
}