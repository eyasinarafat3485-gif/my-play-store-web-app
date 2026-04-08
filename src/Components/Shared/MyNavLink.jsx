import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children, className}) => {
    return (
        <NavLink to={to} className={({ isActive }) => `font-semibold ${className} ${isActive ? "text-purple-600 border-b-2 border-purple-600 pb-2" : ""}`}>
            {children}
        </NavLink> 
    );
};

export default MyNavLink;