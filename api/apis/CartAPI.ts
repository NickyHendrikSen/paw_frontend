import { axiosClient } from "../base";

export const CartAPI = {
    
  addToCart: async(params: {
    productId: string,
    quantity: number
  }) => {
    const response = await axiosClient.post('/cart', {
        productId: params.productId,
        quantity: params.quantity,
      })

    return response;
  },

  getCart: async() => {
    const response = await axiosClient.get('/cart')
    
    return response;
  },

  deleteCart: async(params: {
    productId: string
  }) => {
    const response = await axiosClient.delete(`/cart/${params.productId}`)
    
    return response;
  }
}