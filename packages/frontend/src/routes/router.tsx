 
import {   createHashRouter } from "react-router-dom";
import App from "../App";
import Landing from "../views/Home/components/Landing";
import Login from "../views/Login/Login";



const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/welcome',
                element: <Landing />
            },
            {  
                path: '/auth/login',
                element: <Login />
            }
 
        ],
       
    },
 
])

export default router