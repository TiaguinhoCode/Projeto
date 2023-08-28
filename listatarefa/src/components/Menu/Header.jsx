import React, { useState } from "react";
import './css/styles.css';
import logoImage from './../../assets/img/logo.png';

export const Menu = () => {

    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <header>
            <nav className="border-gray-200 dark:bg-gray-900">

                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">

                    <a href="#" className="flex items-center">
                        <img src={logoImage} alt="logo" className="h-14 mr-2"/>
                        <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">Tarefa Descomplica</span>
                    </a>  

                    <div className="flex items-center md:order-2">
                        <ul className="button_logar">
                            <li>
                                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                    Contact us
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                    Support Center
                                </a>
                            </li>

                           

                            <li>
                                
                                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                    Login
                                </a>
                            </li>

                            <li>
                                <a href="#" className="button_registra text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Sign up
                                </a>
                            </li>
                        </ul>
                        
                        <button id="mobile_menu" onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                            <ion-icon id="menuHamburgue" name={dropdown ? "close-outline" : "menu-outline"}></ion-icon>
                        </button>

                    </div> 

                    {dropdown &&(
                        <div id="mega-menu" className="items-center justify-between w-full md:flex md:w-auto md:order-1">
                            <hr className="divisao"/>
                            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                                <div className="nav_menu p-4">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                Contact us 
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                Support Center
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                Terms
                                            </a>
                                        </li>
                                        <hr className="divisao"/>
                                        <li className="registra_entra">
                                            <a href="#" className="button_login text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                                Login
                                            </a>
                                            <a href="#" className="button_registra text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                Sign up
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}