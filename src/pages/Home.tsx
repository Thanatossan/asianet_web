import React from 'react';
import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';

export interface IHomePageProps { }

const HomePage: React.FC<IHomePageProps> = (props) => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className='bg-[url("/src/images/menubackground.png")] h-screen text-white bg-no-repeat w-full bg-fixed bg-cover'>

                
                <div className='text-white bg-no-repeat w-full bg-fixed bg-cover'>
                    <div className="h-48">
                        <div className="container mx-auto">
                            <div className="flex items-center justify-between pt-6 font-semibold">
                                <a href="/"> Home </a>
                                <a href="/aboutUs"> About us </a>
                                <a href="/domaine"> Domaine </a>
                                <a href="/newGallery"> News & Gallery </a>
                                <a href="/meetTast"> Meet & Taste </a>
                                <a href="/contactUs">Contact Us</a>
                            </div>

                        </div>

                    </div>
                </div>
                </div>
                <Footer></Footer>
            </div>

        </>
    )
}

export default HomePage