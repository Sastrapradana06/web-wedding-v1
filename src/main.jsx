import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TulisTamu from './views/BuatTamu/TulisTamu.jsx';



const router = createBrowserRouter([
  // + Home
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:nama_tamu/:alamat",
    element: <App />,
  },
  {
    path: "/tulis-tamu",
    element: <TulisTamu />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)