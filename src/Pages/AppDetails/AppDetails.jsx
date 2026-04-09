import { useParams } from 'react-router';
import { FadeLoader } from 'react-spinners';
import { useContext } from 'react';
import { InstalledContext } from '../../Context/InstallAppsContext';
import { toast } from 'react-toastify';
import useAppsHook from '../../hooks/useAppsHook';

const AppDetails = () => {
    const { id } = useParams()
    // console.log(id, "did");
    const { apps, loading } = useAppsHook();
    // console.log(apps, loading)

    const {installApps, setInstallApps}= useContext(InstalledContext);

    const expectedApp = apps.find(app => app.id == id);
    // console.log(expectedApp)

    if (loading) {
        return (
            <div className='h-[60vh] flex justify-center items-center'><FadeLoader color='#ad46ff' />  </div>

        )
    }

    const handleInstallApp=()=>{
        setInstallApps([...installApps, expectedApp])
        toast.success (` ${expectedApp.title}App is installed`)
    }
    // console.log(installApps, 'installApps')

    return (
        <div className='w-[90%] mx-auto my-15 '>
            <div className='text-center shadow p-6 space-y-4'>
                <img className='w-auto h-70 mx-auto' src={expectedApp.image} alt="" />
                <h2 className='font-semibold text-3xl'>{expectedApp.title}</h2>
                <p className='text-xl'>Developed by: <span className='font-semibold text-3xl text-purple-600'>{expectedApp.companyName}</span></p>

                <button onClick={handleInstallApp} className='btn bg-purple-600 text-white'>Install Now</button>
            </div>
        </div>
    );
};

export default AppDetails;