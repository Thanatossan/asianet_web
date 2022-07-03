import React from 'react';
import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';
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
export interface IHomePageProps{}

const HomePage: React.FC<IHomePageProps> = (props) =>{
    return(
        <>

            <div>
                <Navbar></Navbar>

                <div className='bg-[url("/src/images/background-home.png")] h-screen text-white bg-no-repeat w-full bg-fixed bg-cover '>

                
                <div className='text-white bg-no-repeat w-full bg-fixed bg-cover'>
                    <div className="h-40">

                        <div className="container mx-auto">
                            <div className="flex items-center justify-between pt-6 font-semibold">
                            <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex z-40 "href="/"> Home </a>
                    <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex"href="/aboutUs"> About us </a>
                    <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex"href="/domaine"> Domaine </a>
                    <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex"href="/newGallery"> News & Gallery </a>
                    <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex"href="/meetTast"> Meet & Taste </a>
                    <a className="hover:animate-bounce hover:bg-gray-700 hover:text-white susm:hidden md:flex"href="/contactUs">Contact Us</a>
                    <Disclosure as="nav" className="sm:absolute z-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 py-0 sm:px-2 lg:px-5 ">
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
          <Disclosure.Panel className="sm:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' bg-gray-900 text-black' : ' text-black-300 bg-black hover:bg-gray-700 hover:text-white',
                    ' block px-3 py-2 rounded-md text-base font-medium'
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
                    </div>
                    <img src="/assets/page/home/icon-slider.png" className="items-center justify-between z-0 container mx-auto susm:hidden sm:block" alt="asianet Logo" />
                    <img src="/assets/main/logo.png" className="items-center justify-between container z-0 mx-auto susm:flex sm:hidden" alt="asianet Logo" />
                <div className='h-16'></div>
                <div className='container mx-auto text-center'>
                    <h1 className='text-3xl'> Premium Wine Agency</h1>
                    <h1 className='text-3xl'> Which specializes in fine Burgundy wine</h1>
                </div>
                <div className='h-16'></div>
                <div className='container mx-auto text-center'>
                    <h1 className='text-3xl font-semibold'> For Asian Market</h1>
                </div>
                <div className='h-20'></div>
                <img src="/assets/page/home/line.png" className="items-center justify-between container mx-auto" alt="asianet Logo" />
                </div>
                

                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default HomePage