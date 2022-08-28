import React, { useEffect ,useState} from 'react';
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import DomaineComponent from "../components/page/DomaineComponent";
import Lottie from "lottie-react";
import loadAnimation from "../images/loading.json";

import axios from 'axios';
export interface IDomaineProps { }



const DomainePage: React.FC<IDomaineProps> = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [domainlist,getDomain] = useState([]);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        axios.get(`https://asianetnew-obpywej2ya-lz.a.run.app/api/get_domain`).then((response)=>{

            getDomain(response.data);
        })
        .catch(error => console.error(`Error : ${error}`));
        
       
    }, [])
    return (
        <>
                <div>
                    <Navbar></Navbar>
                    <Menu current={'Domaines'} descript={'Wines with Authenticity, Distinction and Character'}></Menu>
                    <DomaineComponent arrayImg={domainlist}></DomaineComponent>
                    <Footer></Footer>
                </div>
        </>
    )
}
export default DomainePage