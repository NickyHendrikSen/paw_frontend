import { axiosClient } from "../base";

export const OrderAPI = {

  getOrders: async() => {
    const response = await axiosClient.get('/orders')
    
    return response;
  },

  getOrder: async(params: {
    orderId: string
  }) => {
    const response = await axiosClient.get(`/order/${params.orderId}`)
    
    return response;
  }

}