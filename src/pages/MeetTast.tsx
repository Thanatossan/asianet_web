import React from "react";
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";


const MeetTastPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Menu current={'Meet & Tast'} descript={'lorem'}></Menu>
            <div className="h-screen"></div>
            <Footer></Footer>
        </>
    )
}

export default MeetTastPage