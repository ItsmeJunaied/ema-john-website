import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Home from './Component/Layouts/Home';
import Inventory from './Component/Inventory/Inventory';
import Order from './Component/Order/Order';
import Login from './Component/Login/Login';
import cartProductsLoader from './Loaders/CartProductsLoader';

const router=createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'order',
        element:<Order></Order>,
        loader: cartProductsLoader
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
