import { axiosClient } from "../base";

export const OrderAPI = {

  getOrders: async() => {
    const response = await axiosClient.get('/orders')
    
    return response;
  },

}