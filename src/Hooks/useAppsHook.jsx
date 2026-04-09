import React, { useEffect, useState } from 'react';

const useAppsHook = () => {
     const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            // console.log(data)

            //  setApps(data);
            // setLoading(false)

            setTimeout(() => {
                setApps(data);
                setLoading(false)
            }, 1000)

        };
        fetchData()
    }, [])
    console.log(loading, apps)
    
    return {apps, loading}
};

export default useAppsHook;