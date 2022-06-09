import React from "react";
import { Icon } from "@iconify/react";
const Navbar = () => {

  return (
    <>
      <nav className="relative flex items-center justify-between px-2 py-3 text-white bg-mainColor mb-3">
        <div className="container px-4 mx-auto flex flex-row">
          <div className="px-1">
            <Icon icon="carbon:location-filled" style={{ fontSize: '1rem' }} />
          </div>
          <h1 className="font-bold text-sm">Asianet Find Sourcing Rue la Californie 21200 Beaune FRANCE</h1>
        </div>
        <div className="w-full md:block md:w-auto" >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto px-8">
            <li className="nav-item">
              <a
                className="px-2 py-2 flex items-center "
                href="#pablo"
              >
                <Icon icon="bxl:facebook" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-2 py-2 flex items-center "
                href="#pablo"
              >
                <Icon icon="akar-icons:instagram-fill" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-2 py-2 flex items-center "
                href="#pablo"
              >
                <Icon icon="entypo:mail" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar