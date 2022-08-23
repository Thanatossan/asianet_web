import React, { useEffect } from 'react';
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import NewGalleryComponent from "../components/page/NewGalleryComponent";
import Lottie from "lottie-react";
import loadAnimation from "../images/loading.json";
export interface INewGalleryProps { }
const arrayImg = [{
    name: "HOSTED A WINE TASTING",
    arrayPath: ["/assets/page/newGallery/HOSTED A WINE TASTING/MEET _ TEST7.png",
        "/assets/page/newGallery/HOSTED A WINE TASTING/MEET _ TEST8.png",
        "/assets/page/newGallery/HOSTED A WINE TASTING/News and Gallery 10.png"],
    description: "On the April 1, 2022 We hosted wine tasting event and dinner for the importers, WINE5 Company from Thailand and the other guests at L’orangerie Demigny. We had a great time by enjoying the wine, dining and facilities of our place with the excellent food, prepared by La Comédie du Vin"
    ,topic_id: 1
}, {
    name: "LES GRANDS JOURS DE BOURGOGNE",
    arrayPath: ["/assets/page/newGallery/LES GRANDS JOURS DE BOURGOGNE/News and Gallery 13.png",
        "/assets/page/newGallery/LES GRANDS JOURS DE BOURGOGNE/News and Gallery 14.png",
        "/assets/page/newGallery/LES GRANDS JOURS DE BOURGOGNE/News and Gallery 15.png",
        "/assets/page/newGallery/LES GRANDS JOURS DE BOURGOGNE/News and Gallery 16.png"],
    description: "On March 20-25, 2022. There was the great international event as Les Grands Jours de Bourgogne, the wine event for International meetings trade only. DE SURMAIN Emmanuel and the staff ofASIANET FINE SOURCING had participated to this event for tasting and looking for the great wine for ourcustomers."
    ,topic_id: 2
}, {
    name: "VISITING AND WINE TASTING AT DOMAINE CATHERINE ET CLAUDE MARECHAL",
    arrayPath: ["/assets/page/newGallery/Visiting and Wine tasting at Domaine Catherine et Claude Marechal/NEWS _ GALLERY 1.png",
        "/assets/page/newGallery/Visiting and Wine tasting at Domaine Catherine et Claude Marechal/NEWS _ GALLERY 2.png",
        "/assets/page/newGallery/Visiting and Wine tasting at Domaine Catherine et Claude Marechal/NEWS _ GALLERY 3.png"],
    description: "On March, 12 2022 We had a great opportunity to visit Domanine Catherine et Claude Marechal and tasting the wine: The BOURGOGNE Cote d’Or white, 100% chardonnay is perfect, extremely generous wine, so fruity, full-body and powerful but it also very smooth as velvet in mouth. Moreover, The BOURGOGNE Cote d’Or red, 100% Pinot Noir, is exactly charming, typically Pinot Noir taste. It was also perfectly."
    ,topic_id: 3
}
    , {
    name: "THE SAINT VINCENT TOURNANTE 2022",
    arrayPath: ["/assets/page/newGallery/THE SAINT VINCENT TOURNANTE 2022/News and Gallery 6.png",
        "/assets/page/newGallery/THE SAINT VINCENT TOURNANTE 2022/News and Gallery 7.png",
        "/assets/page/newGallery/THE SAINT VINCENT TOURNANTE 2022/News and Gallery 8.png",
        "/assets/page/newGallery/THE SAINT VINCENT TOURNANTE 2022/News and Gallery 9.png"],
    description: "The Saint Vincent Tournate 2022 was taking the place from March 19-20, 2022 at Puligny-Montrachet. There were a thousand of tourists per hour during the event. There were also the several of Domains where you can taste the wine and local dishes."
    ,topic_id: 4
}
]

const NewGalleryPage: React.FC<INewGalleryProps> = (props) => {
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

                <div>
                    <Navbar></Navbar>
                    <Menu current={'News & Gallery'} descript={''}></Menu>
                    <NewGalleryComponent arrayImg={arrayImg}></NewGalleryComponent>
                    <Footer></Footer>
                </div>

        </>
    )
}

export default NewGalleryPage