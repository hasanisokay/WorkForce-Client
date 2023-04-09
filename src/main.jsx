import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import React from 'react';


const router = createBrowserRouter([{
  path: "/",
  element: <App></App>,
  errorElement: <ErrorPage></ErrorPage>,
  loader: () => fetch("data.json")
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
