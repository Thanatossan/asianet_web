import React from 'react';
import Navbar from '../components/main/Navbar';
import Menu from '../components/main/Menu';
import Footer from '../components/main/Footer';
import ContactUsComponent from '../components/page/ContactUsComponent';
export interface IContactUsProps { }

const ContactUs: React.FC<IContactUsProps> = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <Menu current={'Contact Us'} descript={'We secure strong profitable partnerships on Asean markets'}></Menu>
            <ContactUsComponent></ContactUsComponent>
            <Footer></Footer>
        </>
    )
}

export default ContactUs