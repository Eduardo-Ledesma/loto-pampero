import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Index from './pages/Index'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ProtectedLayout from './layouts/ProtectedLayout'
import Userlogged, { loader as clientsLoader } from './pages/Userlogged'
import NewClient, { action as newClientAction } from './pages/NewClient'
import EditClient, { loader as editClientLoader, action as editClientAction } from './pages/EditClient'
import { action as deleteClientAction } from './components/Clients'
import NewLottery, { loader as newLotteryLoader, action as newLotteryAction } from './pages/NewLottery'
import { action as deleteLotteryAction } from './components/Lottery'
import ErrorPage from './components/ErrorPage'


const router = createBrowserRouter([
  { // Vista general antes de iniciar sesión
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
  { // Vista del vendedor una vez iniciada sesión
    path: '/userlogged',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Userlogged />,
        loader: clientsLoader,
        errorElement: <ErrorPage />
      },
      {
        path: 'newclient',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: 'newlottery',
        element: <NewLottery />,
        loader: newLotteryLoader,
        action: newLotteryAction,
        errorElement: <ErrorPage />
      },
      {
        path: 'editClient/:clientId',
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: 'deleteClient/:clientId',
        action: deleteClientAction
      },
      {
        path: 'deleteLottery/:lotteryId',
        action: deleteLotteryAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
