import React from 'react';
import bannerImg from '../../assets/images/hero.png'
import playStore from '../../assets/images/play-store.jfif'
import appStore from '../../assets/images/app-store.png'

const Banner = () => {
    return (
        <div className='w-full'>
        <div className='min-h-[80vh] text-center pt-10 space-y-7 w-[90%] mx-auto'>
            <h2 className='font-bold text-3xl md:text-5xl'>We Build <br /><span className='text-purple-600'>Productive</span>  Apps</h2>
            <p className='text-gray-600 w-[60%] mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex justify-center gap-5'>
                <button className='btn hover:bg-white'><img className='w-6 h-6 hover:-bg-gre' src={playStore} alt="" /> Google Play</button>
                <button className='btn hover:bg-white'> <img className='w-6 h-6 hover:-bg-gre' src={appStore} alt="" />App Store</button>
            </div>
            <img className='mx-auto' src={bannerImg} alt="" />

        </div>
        </div>
    );
};

export default Banner;