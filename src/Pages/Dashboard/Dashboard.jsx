import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstalledContext } from '../../Context/InstallAppsContext';
import useAppsHook from '../../Hooks/useAppsHook';

const Dashboard = () => {
    const {installApps}= useContext(InstalledContext);
    const { apps } = useAppsHook();
    const unInstalledApps=apps.length- installApps.length;
    console.log(unInstalledApps)

    const data= [
        {name: "Installed", value: installApps.length, fill: "#0088fe"},
        {name: "Uninstalled", value: unInstalledApps, fill: "#FF8042"},
        
    ]
    return (
        <div className='shadow p-10 rounded-md border border-slate-300 w-[90%] mx-auto my-15'>
            <h2 className='font-semibold text-3xl mb-5 text-center'>Installed and Uninstalled apps</h2>
            <PieChart style={{ width: '100%', maxWidth: '500px', margin: 'auto', maxHeight: '60vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend />
      <Tooltip />
      
    </PieChart>
        </div>
    );
};

export default Dashboard;