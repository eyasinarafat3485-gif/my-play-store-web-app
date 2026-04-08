import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';
import MyNavLink from './MyNavLink';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center gap-4 bg-gray-100 shadow py-5 px-15'>
            <img className='w-10' src={logoImg} alt="" />
            <ul className='flex justify-between items-center gap-5'>

                <li><MyNavLink to={"/"}>Home</MyNavLink></li>

                <li><MyNavLink to={"/apps"} className={"text-yellow-500 "}>Apps</MyNavLink></li>
 
                <li><MyNavLink to={"/installApps"} >Installation</MyNavLink></li>
                    
            </ul>
            <button className="btn bg-purple-600 text-white"> <FaGithub />Contribute </button>

        </nav>
    );
};

export default Navbar;