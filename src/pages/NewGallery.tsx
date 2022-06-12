import React from "react";
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import NewGalleryComponent from "../components/page/NewGalleryComponent";
export interface INewGalleryProps { }
const arrayImg = [{
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

const NewGalleryPage: React.FC<INewGalleryProps> = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <Menu current={'New & Gallery'} descript={'lorem'}></Menu>
            <NewGalleryComponent arrayImg={arrayImg}></NewGalleryComponent>
            <Footer></Footer>
        </>
    )
}

export default NewGalleryPage