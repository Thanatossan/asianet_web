import React from "react";
import { Icon } from "@iconify/react";



const Navbar = () => {
  
  return (
    <>
      <nav className="relative flex items-center justify-between px-2 py-1 text-white bg-mainColor ">
        <div className="container px-4 mx-auto flex flex-row">
          <div className="px-1 pt-2">
            <Icon icon="carbon:location-filled" style={{ fontSize: '1rem' }} />
          </div>
          <h1 className="font-bold text-sm  px-2 pt-2 susm:hidden md:block">Asianet Find Sourcing Rue la Californie 21200 Beaune FRANCE</h1>
          <div className=" sm:ml-6">
        
                  
                </div>
        </div>
        <div className="w-full w-auto " >
          <ul className="flex flex-row-reverse  flex-row list-none ml-auto px-8">
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
                href="https://www.instagram.com/petite_cuisine_thai/"
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
      </nav>
    </>

  )
}
export default Navbar