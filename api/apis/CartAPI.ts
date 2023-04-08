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
    
      console.log(response);
    return response;
  },
}