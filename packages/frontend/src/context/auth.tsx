import { ReactNode, createContext, useState } from "react"
import { User } from "../interfaces/user"

interface AuthProviderProps{
  children: ReactNode
}

type TypExContextType = {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
  }
  
export const userContextState = {
    user: { name: '', email: '', password: '', company: ''},
    setUser: () => { }
}
  
export const UserContext =  createContext<TypExContextType>(userContextState)
   
export default function AuthProvider({children } : AuthProviderProps) {
  const [user, setUser] = useState<User>(userContextState.user)

  return (
    <UserContext.Provider value={{user, setUser}}>
       
    </UserContext.Provider>
  )
}
 