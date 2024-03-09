import { createContext } from "react";


export const AuthContext = createContext({ infoUser: null });

export default function AuthProvider({ value, children }) {
   return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
   );
}
