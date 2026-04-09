import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({app, id}) => {
    return (
        <Link to={`/apps/${app.id}`} key={id} className="card bg-base-100 shadow-sm">
                        <figure>
                            <img className='w-auto h-50 object-contain pt-5'
                                src={app.image}/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{app.title}</h2>
                            <div className='flex items-center gap-4 justify-between '>
                            <span className='bg-green-100 text-green-500 flex items-center gap-2 py-1 px-2 font-semibold rounded-md'><FaDownload /> {app.downloads}</span>

                            <span className='bg-orange-100 text-orange-500 flex items-center gap-2 py-1 px-2 font-semibold rounded-md'><FaStar />{app.ratingAvg}</span>
                            </div>
                        </div>
                    </Link>
    );
};

export default AppCard;