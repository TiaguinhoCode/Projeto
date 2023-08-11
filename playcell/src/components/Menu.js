import React from "react";
import playcell from "../img/playcell.png";

function Menu() {
    return(
        <nav className="menu p-5 shadow md:flex  md:items-center md:justify-between">
            <div>
                <a className="text-2xl font-[Poppins] cursor-pointer">
                    <img src={playcell} alt="PlayCell" className="w-40"/>
                    
                </a>
            </div>

            <ul className="md:flex md:items-center">
                <li className="mx-4 my-6 md:my-0 z-[-1] md:z-auto md:static absolute  w-full left-0">
                    <a href="#" className="text-xl hover:text-cyan-500 duration-500">Home</a>
                </li>
                <li className="mx-4 my-6 md:my-0 ">
                    <a href="#" className="text-xl hover: duration-500">Produtos</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;