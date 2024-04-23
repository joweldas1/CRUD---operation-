import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Component/AddCoffee";
import UpdateCoffee from "./Component/UpdateCoffee";
import Login from "./Auth/Login";
import SingIn from "./Auth/SingIn";
import User from "./Auth/User";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        loader:()=>fetch('https://coffee-store-server-fawn-mu.vercel.app/coffee')
    },
    {
        path:'/addCoffee',
        element:<AddCoffee/>,
    },
    {
        path:`updateCoffee/:id`,
        element:<UpdateCoffee/>,
        loader:({params})=>fetch(`https://coffee-store-server-fawn-mu.vercel.app/coffee/${params.id}`)
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'singIn',
        element:<SingIn/>
    },
    {
        path:'/user',
        element:<User/>,
        loader:()=>fetch('https://coffee-store-server-fawn-mu.vercel.app/user')
    }
])

export default router