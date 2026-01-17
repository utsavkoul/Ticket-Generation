import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ListofTickets from './Components/ListofTickets';
const router = createBrowserRouter([
//   {
//   path:"/",
//   element:<App/>,
// }
  
// },{
//   path:"/loginpage",
//   element:<LoginPage/>,
//   childern:[{
//     path:"/loginpage/login",
//     element:<Login/>
  
//   },{
//     path:"/loginpage/registration",
//     element:<Registration/>
  
//   }],
// }
{
  path:"/dashboard",
  element:<DashBoard/>,
  childern:[
    {
    path:"/alltickets",
    element:<ListofTickets/>,
  
  },
  ]
}]);
// router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
