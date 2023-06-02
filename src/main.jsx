import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { ClientsProvider } from './context/ClientsProvider'

import './index.css'
import AuthLayout from './layouts/AuthLayout'
import Index from './pages/Index'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

import ProtectedLayout from './layouts/ProtectedLayout'
import Userlogged, { loader as clientsLoader } from './pages/Userlogged'

import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'
import { action as deleteClientAction } from './components/Clients'

import NewLottery, { loader as newLotteryLoader, action as newLotteryAction } from './pages/NewLottery'
import EditLottery, { loader as editLotteryLoader, action as editLotteryAction } from './pages/EditLottery'
import { action as deleteLotteryAction } from './components/Lottery'

import AdminLogged from './pages/AdminLogged'

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
        errorElement: <ErrorPage />
      },
      {
        path: 'editLottery/:lotteryId',
        element: <EditLottery />,
        loader: editLotteryLoader,
        action: editLotteryAction,
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
  }, // Vista del Admin
  {
    path: '/adminlogged',
    element: <ProtectedLayout />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ClientsProvider>
        <RouterProvider router={router} />
      </ClientsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
