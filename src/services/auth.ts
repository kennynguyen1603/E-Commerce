import { updateAuthorization } from "@/config/axios";
import { saveInfoToLocalStorage } from "@/utils/product";

export function logout(){
   updateAuthorization(null)
   saveInfoToLocalStorage(null)
}