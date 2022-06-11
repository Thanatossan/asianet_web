import React from "react";
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
export interface INewGalleryProps { }

const NewGalleryPage: React.FC<INewGalleryProps> = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <Menu current={'New & Gallery'} descript={'lorem'}></Menu>
            <div className="h-screen"></div>
            <Footer></Footer>
        </>
    )
}

export default NewGalleryPage