import React from "react";

import { Icon } from "@iconify/react";
const Footer = () => {
    return (<>

        <footer className=" p-4 shadow md:px-8 md:py-2  text-white bg-secondColor">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className=" items-center mb-4 sm:mb-0">
                    
                    <img src="/assets/main/logo.png" className="mr-3 mb-1 h-8 " alt="asianet Logo" />
                    
                    <div className="text-xs py-2 sm:hidden md:block ">
                        <p>Asianet Fine Sourcing agency was established since 2015.</p>
                        <p>We are premium wine agency dedicated to bringing fine Burgundy wine to ASIAN markets.</p>
                    </div>
                </div>


                <div className="flex flex-col">
                    <div className="pb-5 px-2">
                        <ul className="flex flex-row-reverse items-end text-sm text-white ">
                        <li>
                                <a
                                    className="px-2 py-2 flex  "
                                    href="mailto:asianetfinesourcing@gmail.com"
                                >
                                    <Icon icon="entypo:mail" />
                                </a>
                            </li>
                            <li >
                                <a
                                    className="px-2 py-2 flex  "
                                    href="https://www.instagram.com/burgundy_wine_connect/"
                                >
                                    <Icon icon="akar-icons:instagram-fill" />
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    className="px-2 py-2 flex"
                                    href="https://www.facebook.com/asianetfinesourcing"
                                >
                                    <Icon icon="bxl:facebook" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="container px-4 py-1 mx-auto flex flex-row ">
                        <div className="px-1">
                            <Icon icon="carbon:location-filled" style={{ fontSize: '1rem' }} />
                        </div>
                        <p className=" text-sm">Asianet Fine Sourcing Rue de la Californie 21200 Beaune FRANCE</p>
                    </div>
                </div>
            </div>
            {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span> */}
        </footer>

    </>
    )
}
export default Footer