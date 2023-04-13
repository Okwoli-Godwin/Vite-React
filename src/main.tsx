import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider} from "react-router-dom"
import { mainrouter } from './component/Router/Mainrouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={mainrouter} />
    <App />
  </React.StrictMode>,
)
