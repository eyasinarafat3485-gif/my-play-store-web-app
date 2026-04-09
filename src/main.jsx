import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Router/Routes';
import InstallAppsProvider from './Context/InstalledAppsprovider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallAppsProvider >
      <RouterProvider router={router} />
    </InstallAppsProvider>

  </StrictMode>
)
