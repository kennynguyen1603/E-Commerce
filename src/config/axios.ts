import axios from 'axios';
const Axios = axios.create(
   {
      baseURL: import.meta.env.VITE_API_BACKEND_BASE
   }
)

export function updateAuthorization(token: string | null){
   Axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export default Axios