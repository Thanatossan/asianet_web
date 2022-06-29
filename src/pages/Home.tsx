import React from 'react';
import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';
import Menu from '../components/main/Menu';
export interface IHomePageProps{}

const HomePage: React.FC<IHomePageProps> = (props) =>{
    return(
        <>

            <div>
                <Navbar></Navbar>

                <div className='bg-[url("/src/images/background-home.png")] h-screen text-white bg-no-repeat w-full bg-fixed bg-cover'>

                
                <div className='text-white bg-no-repeat w-full bg-fixed bg-cover'>
                    <div className="h-40">

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
                    <img src="/assets/page/home/icon-slider.png" className="items-center justify-between container mx-auto" alt="asianet Logo" />
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