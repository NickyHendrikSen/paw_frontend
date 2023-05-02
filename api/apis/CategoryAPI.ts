import { axiosClient } from "../base";

export const CategoryAPI = {

  getCategories: async() => {
    const response = await axiosClient.get('/categories')
    
    return response;
  },
  
}