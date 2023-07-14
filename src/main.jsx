import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { ClientsProvider } from './context/ClientsProvider'
import { AdminProvider } from './context/AdminProvider'

import './index.css'
import AuthLayout from './layouts/AuthLayout'
import Index from './pages/Index'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ChangePassword from './pages/changePassword'

import ProtectedLayout from './layouts/ProtectedLayout'
import Userlogged from './pages/Userlogged'

import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'

import NewLottery from './pages/NewLottery'
import EditLottery from './pages/EditLottery'

import AdminLayout from './layouts/AdminLayout'
import NewSeller from './pages/NewSeller'
import EditSeller from './pages/EditSeller'

import CloseLottery from './pages/CloseLottery'
import Winners from './pages/Winners'

import AdminLogged from './pages/AdminLogged'



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
      },     
      {
        path: '/password/change',
        element: <ChangePassword />
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
      },
      {
        path: 'newclient',
        element: <NewClient />,
      },
      {
        path: 'newlottery',
        element: <NewLottery />,
      },
      {
        path: 'editClient/:clientId',
        element: <EditClient />,
      },
      {
        path: 'editLottery/:lotteryId',
        element: <EditLottery />,
      },
      {
        path: 'deleteClient/:clientId',
      },
      {
        path: 'deleteLottery/:lotteryId',
      }
    ]
  }, // Vista del Admin
  {
    path: '/adminlogged',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminLogged />,
      },
      {
        path: 'newseller',
        element: <NewSeller />,
      },
      {
        path: 'editseller/:sellerId',
        element: <EditSeller />
      },
      {
        path: 'closelottery',
        element: <CloseLottery />
      },
      {
        path: 'winners/:id',
        element: <Winners />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AdminProvider>
        <ClientsProvider>
          <RouterProvider router={router} />
        </ClientsProvider>
      </AdminProvider>
    </AuthProvider>
  </React.StrictMode>,
)
