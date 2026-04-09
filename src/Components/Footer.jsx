import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';

const Footer = () => {
    return (
        <footer className="w-full bg-[#001529] text-white px-15 py-10 md:px-15">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex items-center gap-2 mb-6 md:mb-0">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold italic">H</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">HERO.IO</span>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-3">
                        <span className="text-sm font-semibold text-gray-300">Social Links</span>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                <BsTwitter size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                <LiaLinkedin size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700/50 w-full mb-6"></div>

                <div className="text-center">
                    <p className="text-sm text-gray-400">
                        Copyright © 2026 - All right reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;