import { axiosClient } from "../base";

export const OrderAPI = {

  getOrders: async(params: {
    minDate?: any,
    maxDate?: any,
    page?: number,
  }) => {
    const response = await axiosClient.get('/orders', {params: {
      ...(params.maxDate && {max_date: params.maxDate}),
      ...(params.minDate && {min_date: params.minDate}),
      ...(params.page && {page: params.page})
    }})
    
    return response;
  },

  getOrder: async(params: {
    orderId: string
  }) => {
    const response = await axiosClient.get(`/order/${params.orderId}`)
    
    return response;
  }

}