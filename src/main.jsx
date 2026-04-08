import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './Layout/RootLayout';
import Apps from './Pages/Apps/Apps';
import InstallApps from './Pages/InstallApps/InstallApps';
import Homepage from './Pages/Homepage/Homepage';
// import ErrorPage from './Pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout ,
    children: [
      {
        index: true ,
        Component: Homepage,
        // loader: ()=> fetch("/data.json")
      },
      {
        path: "/apps",
        Component: Apps,
        
      },
      {
        path: "/installApps",
        Component: InstallApps,
      }
    ],
    // errorElement: ErrorPage
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
