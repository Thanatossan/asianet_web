import React from "react";
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import DomaineComponent from "../components/page/DomaineComponent";

export interface IDomaineProps { }



const arrayImg = [{
    name:"Chateau de Monthelie",
    path: "../../../../../../../../../assets/upload/upload_domain/1656830147620-IMG_3060.PNG",
    description: "Bruno Clair founded the domaine which bears his name in 1979. Nowadays, it includes Clos de Bèze, Cazetiers, Clos St-Jacques, Vosne-Romanée, Clos du Fonteny, Chambolle-Musigny, Corton-Charlemagne, Pernand-Vergelesses, Aloxe-Corton, Gevrey-Chambertin and Petite Chapelle.More Information about Domaine"
    ,link:"https://domainedesuremain.com"
},{
    name:"Domaine Alain Jeanniard",
    path: "assets/page/domaine/Domaine Alain Jeanniard.png",
    description: "lorem2"
    ,link:""
}]
const DomainePage: React.FC<IDomaineProps> = () => {
    return (
        <>

            <Navbar></Navbar>
            <Menu current={'Domaine'} descript={'Wines with Authenticity, Distinction and Character'}></Menu>
            <DomaineComponent arrayImg2={arrayImg}></DomaineComponent>
            <Footer></Footer>

        </>
    )
}
export default DomainePage