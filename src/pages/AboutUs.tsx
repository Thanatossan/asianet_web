import React from "react";
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
export interface IAboutPageProps { }

const AboutUsPage: React.FC<IAboutPageProps> = (props) => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <Menu current={'About Us'} descript={'We secure strong profitable partnerships on Asean markets'}></Menu>
                <div className="h-screen"></div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default AboutUsPage