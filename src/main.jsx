import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import React from 'react';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';


const router = createBrowserRouter([{
  path: "/",
  element: <App></App>,
  errorElement: <ErrorPage></ErrorPage>,
  loader: () => fetch("data.json"),
  children:[
    {
      path:"statistics",
      element: <Statistics></Statistics>
    },
    {
      path:"applied-jobs",
      element: <AppliedJobs></AppliedJobs>
    },
    {
      path:"blog",
      element: <Blog></Blog>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
