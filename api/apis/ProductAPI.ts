import { axiosClient } from "../base";
import objectToUrlEncoded from "@/utils/objectToUrlEncoded";

export const ProductAPI = {
    
    getProducts: async(params: {
      categories?: string,
      search?: string,
      sort: string,
      page?: number,
    }) => {
      const response = await axiosClient.get('/products', {params: {
        ...(params.categories && {categories: params.categories}),
        ...(params.search && {search: params.search}),
        ...(params.sort && {sort: params.sort}),
        ...(params.page && {page: params.page})
      }})
      return response;
    },
    getProduct: async(params: {
      productId: string,
    }) => {
      const response = await axiosClient.get(`/product/${params.productId}`);
      return response;
    },
}