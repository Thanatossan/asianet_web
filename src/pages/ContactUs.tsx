import React from 'react';
import Navbar from '../components/main/Navbar';
import Menu from '../components/main/Menu';
import Footer from '../components/main/Footer';
export interface IContactUsProps { }

const ContactUs: React.FC<IContactUsProps> = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <Menu current={'Contact Us'} descript={'We secure strong profitable partnerships on Asean markets'}></Menu>
            <div className="h-screen"></div>
            <Footer></Footer>
        </>
    )
}

export default ContactUs