import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import { fetchChannelApi } from './apis/list.ts'
fetchChannelApi().then(res => console.log(res))
ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
