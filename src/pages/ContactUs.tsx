import React, { useEffect } from 'react';
import Navbar from '../components/main/Navbar';
import Menu from '../components/main/Menu';
import Footer from '../components/main/Footer';
import ContactUsComponent from '../components/page/ContactUsComponent';
import Lottie from "lottie-react";
import loadAnimation from "../images/loading.json";

export interface IContactUsProps { }

const ContactUs: React.FC<IContactUsProps> = (props) => {
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
                <div>
            <Navbar></Navbar>
            <Menu current={'Contact Us'} descript={'We secure strong profitable partnerships on Asean markets'}></Menu>
            <ContactUsComponent></ContactUsComponent>
            <Footer></Footer>
            </div>
        </>
    )
}

export default ContactUs