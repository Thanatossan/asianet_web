import React, { useEffect } from 'react';
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import AboutUsComponent from "../components/page/AboutUsComponent";
import OurserviceComponent from "../components/page/OurServicesComponent";
import Lottie from "lottie-react";
import loadAnimation from "../images/loading.json";
export interface IAboutPageProps { }


const arrayImgImporter = [{
    name:"Looking the great wine for the importers and collectors",
    path: "/assets/page/aboutUs/Looking the great wine for the importers and collectors.JPG",
    description: ""
},{
    name:"visit domains",
    path: "/assets/page/aboutUs/visit domains.png",
    description: "s"
},{
    name:"welcoming the importers from Thailand",
    path: "/assets/page/aboutUs/welcoming the importers from Thailand.JPG",
    description: ""
}]

const arrayImgProducer = [{
    name:"producers1",
    path: "/assets/page/ourServices/servicesForProducers/services for producers.png",
    description: ""
},{
    name:"producers2",
    path: "/assets/page/ourServices/servicesForProducers/services for producers 2.png",
    description: "s"
},{
    name:"producers3",
    path: "/assets/page/ourServices/servicesForProducers/service producer 3.png",
    description: ""
}]

const AboutUsPage: React.FC<IAboutPageProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        window.addEventListener("load", handleLoading);
        return () => window.removeEventListener("load", handleLoading);
    }, [])
    return (
        <>
        {!isLoading ?
            <div>
                <Navbar></Navbar>
                <Menu current={'About Us'} descript={'We secure strong profitable partnerships on Asean markets'}></Menu>
                <AboutUsComponent arrayImg={arrayImgImporter}></AboutUsComponent>
                
                <OurserviceComponent arrayImg={arrayImgProducer}></OurserviceComponent>
                <Footer></Footer>
            </div>
             : <Lottie animationData={loadAnimation} className="mx-auto h-screen" loop={true} />
            }
        </>
    )
}

export default AboutUsPage