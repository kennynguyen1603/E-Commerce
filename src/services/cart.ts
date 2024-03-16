import Axios from "@/config/axios"
import Header from '@/components/Layout/Header';

export function addToCartServer(listProducts: cartItemsServerType[]): Promise<any>{
   
   // console.log("🚀 ~ returnnewPromise ~ Axios:", Axios.Header)
   return new Promise((resolve,rej) => {
      Axios.post(`${import.meta.env.VITE_API_BACKEND_BASE}carts/create`, {
         products: listProducts,
      })
      .then((res: any) => {
         resolve(res)
         })
      .catch((err) => {
            rej(err)
         })
   })
}