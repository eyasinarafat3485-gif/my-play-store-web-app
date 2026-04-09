import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Apps from "../Pages/Apps/Apps";
import InstallApps from "../Pages/InstallApps/InstallApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
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
      },
      {
        path: "/apps/:id",
        Component: AppDetails
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      }
    ],
    // errorElement: ErrorPage
  },
 
]);
