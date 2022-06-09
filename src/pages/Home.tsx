import React from 'react';
import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';
export interface IHomePageProps{}

const HomePage: React.FC<IHomePageProps> = (props) =>{
    return(
        <>
        <div>
            <Navbar></Navbar>
            <div className="h-screen"></div>
            <Footer></Footer>
        </div>
        </>
    )
}

export default HomePage