 
import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './views/Home/components/Header'
import Footer from './views/Home/components/Footer'
import React, { useState, createContext } from 'react'
import { User } from './interfaces/user'


 

type TypExContextType = {
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>
}

const userContextState = {
  user: { name: '', email: '', password: '', company: ''},
  setUser: () => { }
}

export const UserContext =  createContext<TypExContextType>(userContextState)
 
function App() {
  const [user, setUser] = useState<User>(userContextState.user)

  const navigate = useNavigate()

  const goToLogin = () => navigate('/auth/login')

  const goToHome = () => navigate('/')

  const goToLanding =  () => navigate('/welcome')

  return (
    <UserContext.Provider value={ {user, setUser}}> 
      <div>
        <Header  routeClick={[goToLogin, goToHome, goToLanding]}  currRouter=''/>
        <div>      
            <Outlet />
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
 
  )
}

export default App
