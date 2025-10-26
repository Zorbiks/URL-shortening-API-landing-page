import { useState } from "react";

import logoSrc from "../assets/logo.svg";


const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <nav className="py-12">
            <div className="flex items-center gap-12 px-4 mx-auto max-w-6xl">
                <div className="flex-1 md:flex-none">
                    <img src={logoSrc} alt="Logo" />
                </div>
                <div className={`${menuOpened ? "flex" : "hidden"} md:flex w-[calc(100%-24px)] md:w-auto md:items-center md:gap-0 gap-4 absolute top-32 left-3 md:left-auto md:top-auto md:relative flex-col md:flex-row bg-purple-950 md:bg-transparent rounded-xl p-6 md:p-0 flex-1 font-bold text-white md:text-gray-500 z-50`}>
                    <div className="flex-1">
                        <ul className="flex flex-col items-center gap-6 md:items-baseline md:flex-row">
                            <li><a className="md:hover:text-gray-900" href="#">Features</a></li>
                            <li><a className="md:hover:text-gray-900" href="#">Pricing</a></li>
                            <li><a className="md:hover:text-gray-900" href="#">Resources</a></li>
                        </ul>
                    </div>
                    <hr className="border-gray-600" />
                    <div>
                        <ul className="flex flex-col items-center gap-6 md:items-baseline md:flex-row">
                            <li><a className="md:hover:text-gray-900" href="#">Login</a></li>
                            <li className="w-full"><a className="block px-6 py-2 text-center text-white bg-blue-400 rounded-full hover:bg-blue-300" href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
                <div className="md:hidden">
                    <div
                        onClick={() => setMenuOpened(prevMenuOpened => !prevMenuOpened)}
                        className="flex flex-col justify-between w-10 h-8 cursor-pointer"
                    >
                        <div className="w-full h-1 bg-gray-500"></div>
                        <div className="w-full h-1 bg-gray-500"></div>
                        <div className="w-full h-1 bg-gray-500"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;