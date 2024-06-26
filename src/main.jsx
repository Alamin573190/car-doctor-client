
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routs/Routs'
import AuthProvider from './providers/AuthProvider'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-6xl mx-auto'>
   <React.StrictMode>
   <AuthProvider>

   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
  
 </div>
)
