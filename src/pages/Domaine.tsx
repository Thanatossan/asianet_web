import React from "react";
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import DomaineComponent from "../components/page/DomaineComponent";

export interface IDomaineProps { }



const arrayImg = [{
    name:"Chateau de Monthelie",
    path: "assets/page/domaine/Chateau de Monthelie.png",
    description: "lorem1"
},{
    name:"Domaine Alain Jeanniard",
    path: "assets/page/domaine/Domaine Alain Jeanniard.png",
    description: "lorem2"
},{
    name:"Domaine Brune Clair",
    path: "assets/page/domaine/Domaine Brune Clair.png",
    description: "lorem3"
},{
    name:"Domaine Chantal Remy",
    path: "assets/page/domaine/Domaine Chantal Remy.png",
    description: "lorem4"
},{
    name:"Domaine De la Pousse d_Or",
    path: "assets/page/domaine/Domaine De la Pousse d_Or.png",
    description: "lorem5"
},{
    name:"Domaine de Villaine",
    path: "assets/page/domaine/Domaine de Villaine.png",
    description: "lorem1"
},{
    name:"Domaine Dominique Laurent",
    path: "assets/page/domaine/Domaine Dominique Laurent .png",
    description: "lorem1"
},{
    name:"Domaine Felletig",
    path: "assets/page/domaine/Domaine Felletig.png",
    description: "lorem1"
}]
const DomainePage: React.FC<IDomaineProps> = (props) => {
    return (
        <>

            <Navbar></Navbar>
            <Menu current={'Domaine'} descript={'Wines with Authenticity, Distinction and Character'}></Menu>
            <DomaineComponent arrayImg={arrayImg}></DomaineComponent>
            <Footer></Footer>

        </>
    )
}
export default DomainePage