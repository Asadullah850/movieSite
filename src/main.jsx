import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/CardDetails/Details';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AllMovie from './Components/AllMovie/AllMovie';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'details/:id',
        element:<Details></Details>,
        loader:()=>fetch(`https://api.tvmaze.com/search/shows?q=all`)
      },
      {
        path:'allMovie',
        element:<AllMovie></AllMovie>,
      },
    ],
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  },
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
