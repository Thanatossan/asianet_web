import React, { useEffect } from 'react';
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import MeetTastComponent from "../components/page/MeetTastComponent";
import Lottie from "lottie-react";
import loadAnimation from "../images/loading.json";
const arrayImg = [{
    name: "HOSTED A WINE TASTING",
    arrayPath: ["/assets/page/newGallery/HOSTED A WINE TASTING/MEET _ TEST7.png",
        "/assets/page/newGallery/HOSTED A WINE TASTING/MEET _ TEST8.png",
        "/assets/page/newGallery/HOSTED A WINE TASTING/News and Gallery 10.png"],
    description: "On the April 1, 2022 We hosteda wine tasting event and dinner for the importers, WINE5 Company from Thailand and the other guests at L’orangerie Demigny. We had a great time by enjoying the wine, dining and facilities of our place with the excellent food, prepared by La Comédie du Vin"
}, {
    name: "LES GRANDS JOURS DE BOURGOGNE",
    arrayPath: ["/assets/page/newGallery/LES GRANDS JOURS DE BOURGOGNE/News and Gallery 13.png",
        "/assets/page/newGallery/LES GRANDS JOURS DE BOURGOGNE/News and Gallery 14.png",
        "/assets/page/newGallery/LES GRANDS JOURS DE BOURGOGNE/News and Gallery 15.png",
        "/assets/page/newGallery/LES GRANDS JOURS DE BOURGOGNE/News and Gallery 16.png"],
    description: "On March 20-25, 2022. There was the great international event as Les Grands Jours de Bourgogne, the wine event for International meetings trade only. DE SURMAIN Emmanuel and the staff ofASIANET FINE SOURCING had participated to this event for tasting and looking for the great wine for ourcustomers."
}
]
const MeetTastPage = () => {
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
            {!isLoading ?
                <div>
                    <Navbar></Navbar>
                    <Menu current={'Meet & Tast'} descript={''}></Menu>
                    <MeetTastComponent arrayImg={arrayImg}></MeetTastComponent>
                    <Footer></Footer>
                </div>
                : <Lottie animationData={loadAnimation} className="mx-auto h-screen" loop={true} />
            }
        </>
    )

}

export default MeetTastPage