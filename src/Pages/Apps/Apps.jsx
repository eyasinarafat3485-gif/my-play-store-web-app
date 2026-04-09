import { FadeLoader } from 'react-spinners';
import AppCard from '../../Components/Ui/AppCard';
import useAppsHook from '../../Hooks/useAppsHook';

const Apps = () => {
    const {apps, loading}= useAppsHook()
    
    return (
        <div className='my-12'>
            <div className='my-10 text-center'>
                <h2 className='font-bold text-4xl pb-4'>All Apps</h2>
            </div>
            {loading ? 
            <div className='flex justify-center items-center'><FadeLoader color='#ad46ff' /> </div> : 
            <div className='grid grid-cols-1 md:grid-cols-4 w-[90%] mx-auto gap-8'>
            {
                apps.map((app, id) => {
                    return (
                    <AppCard app={app} key={id}></AppCard>
                    )
                })
            }
            </div>}
        </div>
    );
};

export default Apps;