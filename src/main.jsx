import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Index from './pages/Index'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Userlogged from './pages/Userlogged'
import ProtectedLayout from './layouts/ProtectedLayout'



const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/password/forgot',
        element: <ForgotPassword />
      },
      {
        path: '/password/reset',
        element: <ResetPassword />
      }     
    ]
  },
  {
    path: '/userlogged',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Userlogged />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
