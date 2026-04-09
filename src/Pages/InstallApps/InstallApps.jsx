import React, { useContext } from 'react';
import { InstalledContext } from '../../Context/InstallAppsContext';
import { toast } from 'react-toastify';

const InstallApps = () => {
    const {installApps, setInstallApps}= useContext(InstalledContext);
    console.log(installApps, setInstallApps)

    const handleUninstall=(app)=>{
        console.log(app, "unistall")

        const restApps= installApps.filter(iApp => iApp.id != app.id);
        console.log(restApps);
        setInstallApps(restApps);
        toast.warning(`${app.title} is Uninstall`)
    }

    return (
        <div className='w-[90%] mx-auto my-15 '>
            {installApps.length === 0 ? <h2 className='font-bold text-2xl text-center my-5'>No installed apps found!</h2> :
                installApps.map((app, index) => {
                    return <div key={index} className='flex justify-between gap-4 shadow items-center p-4 mb-5 rounded-2md bg-slate-200'>
                        <div>
                        <img className='w-auto h-30' src={app.image} alt="" />
                        <h2 className='font-semibold text-2xl'>{app.title}</h2>
                        </div>
                        
                        <button onClick={()=> handleUninstall(app)} className='btn bg-secondary'>Uninstall </button>
                        
                    </div>
                })
            }
        </div>
    );
};

export default InstallApps;