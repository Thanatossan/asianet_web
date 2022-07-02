import React from "react";
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


const Navbar = () => {
  
  return (
    <>
      <nav className="relative flex items-center justify-between px-2 py-1 text-white bg-mainColor ">
        <div className="container px-4 mx-auto flex flex-row">
          <div className="px-1 pt-6">
            <Icon icon="carbon:location-filled" style={{ fontSize: '1rem' }} />
          </div>
          <h1 className="font-bold text-sm pt-2 px-2 pt-5 susm:hidden md:block">Asianet Find Sourcing Rue la Californie 21200 Beaune FRANCE</h1>
          <div className=" sm:ml-6">
          <Disclosure as="nav" className="">
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
              <div className=" items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
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
        </div>
        <div className="w-full " >
          <ul className="flex flex-row-reverse  lg:flex-row list-none lg:ml-auto px-8">
            <li>
              <a
                className="px-2 py-2 flex  "
                href="#pablo"
              >
                <Icon icon="mailto:asianetfinesourcing@gmail.com" />
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