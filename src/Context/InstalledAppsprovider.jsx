import { useState } from "react";
import { InstalledContext } from "./InstallAppsContext";

const InstallAppsProvider = ({children}) => {

    const [installApps, setInstallApps]= useState([]);


    const data={
        installApps, setInstallApps
    }
    return (
        <InstalledContext.Provider value={data}>{children}</InstalledContext.Provider>
    );
};

export default InstallAppsProvider;