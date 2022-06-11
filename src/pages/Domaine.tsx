import React from "react";
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";


export interface IDomaineProps { }

const DomainePage: React.FC<IDomaineProps> = (props) => {
    return (
        <>

            <Navbar></Navbar>
            <Menu current={'Domaine'} descript={'Wines with Authenticity, Distinction and Character'}></Menu>
            <div className="h-screen"></div>
            <Footer></Footer>

        </>
    )
}
export default DomainePage