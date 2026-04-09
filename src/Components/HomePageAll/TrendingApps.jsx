import { FadeLoader } from 'react-spinners';
import AppCard from '../Ui/AppCard';
import { Link } from 'react-router';
import UseAppsHook from '../../Hooks/UseAppsHook';


// (1) normal data fetch-------
// const appsPromise = fetch("/data.json").then((res) => res.json())

const TrendingApps = () => {
    const {apps, loading}= UseAppsHook()
    // const apps = use(appsPromise);
    // console.log(apps)

    // (2) useLoader data fetch-------
    // const data= useLoaderData()
    // console.log(data)

// (3) useEffect data fetch-------
    // console.log(apps, "apps");
    // console.log(loading, "loading")


    return (
        <div className='my-15 mx-auto'>
            <div className='my-10 text-center'>
                <h2 className='font-bold text-4xl pb-4'>Trending Apps</h2>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
            {loading ? 
            <div className='flex justify-center items-center'><FadeLoader color='#ad46ff' /> </div> : 
            <div className='grid grid-cols-1 md:grid-cols-4 w-[90%] mx-auto gap-8'>
            {
                apps.slice(0, 8).map((app, id) => {
                    return (
                    <AppCard app={app} key={id}></AppCard>
                    )
                })
            }
            </div>}

            <div className='text-center my-10'>
                <Link to={'/apps'}>
            <button className='btn bg-purple-600 text-white '>Show All</button>
            </Link>
            </div>

        </div>
    );
};

export default TrendingApps;