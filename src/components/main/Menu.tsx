import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About us', href: '/aboutUs', current: false },
  { name: 'Domaine', href: '/domaine', current: false },
  { name: 'News & Gallery', href: '/newGallery', current: false },
  { name: 'Meet & Taste', href: '/meetTast', current: false },
  { name: 'Contact Us', href: '/contactUs', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export interface IMenu {
  current: string
  descript: string
}
const Menu1: React.FC<IMenu> = (props) => {
  return (
    <>
      {/* <div className="bg-fixed w-full bg-cover bg-center file: text-white" style={
        {backgroundImage: "url(/assets/main/menubackground.png)"}
        }> */}

      <div className='bg-[url("/src/images/menubackground.png")] text-white bg-no-repeat w-full bg-fixed bg-cover'>
        <div className="h-96 sm:h-60 ">
          <div className="container mx-auto">
            <div className="flex items-center justify-between pt-6 font-semibold ">

              <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex z-40" href="/"> Home </a>
              <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex" href="/aboutUs"> About us </a>
              <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex" href="/domaine"> Domaine </a>
              <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex" href="/newGallery"> News & Gallery </a>
              <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex" href="/meetTast"> Meet & Taste </a>
              <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex" href="/contactUs">Contact Us</a>
              <Disclosure as="nav" className="sm:absolute z-0">
                {({ open }) => (
                  <>
                    <div className="max-w-7xl mx-auto px-2 py-0 sm:px-2 lg:px-5">
                      <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex  sm:hidden">
                          {/* Mobile menu button*/}
                          <Disclosure.Button className="inline-flex items-center justify-center p-0 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                          </Disclosure.Button>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        </div>
                      </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-black' : 'text-black-300 bg-black hover:bg-gray-700 hover:text-white',
                              'block px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>

                  </>
                )}
              </Disclosure>
            </div>

            <div className="flex  items-center justify-center pt-6 mx-auto">
              <h1 className="text-5xl" > {props.current}</h1>
            </div>
            <div className="flex  items-center justify-center pt-6 mx-auto">
              <p > {props.descript}</p>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="bg-black h-44 w-full bg-cover bg-center relative">
    <img src="/assets/main/menubackground.png" className="w-full h-full object-cover " />
    </div> */}
    </>

  )

}
export default Menu1
