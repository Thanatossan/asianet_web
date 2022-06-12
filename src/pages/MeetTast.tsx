import React from "react";
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import MeetTastComponent from "../components/page/MeetTastComponent";
const arrayImg = [{
    name:"HOSTED A WINE TASTING",
    arrayPath: ["/assets/page/meetTast/1/MEET _ TEST1.png",
    "/assets/page/meetTast/1/MEET _ TEST2.png",
    "/assets/page/meetTast/1/MEET _ TEST3.png",
    "/assets/page/meetTast/1/MEET _ TEST4.png",
    "/assets/page/meetTast/1/MEET _ TEST5.png",
    "/assets/page/meetTast/1/MEET _ TEST6.png",
    "/assets/page/meetTast/2/MEET _ TEST7.png",
    "/assets/page/meetTast/2/MEET _ TEST8.png"
],
description: "On March 20-25, 2022. There was the great international event as Les Grands Jours de Bourgogne, the wine event for International meetings trade only. DE SURMAIN Emmanuel and the staff ofASIANET FINE SOURCING had participated to this event for tasting and looking for the great wine for ourcustomers."
}
]
const MeetTastPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Menu current={'Meet & Tast'} descript={''}></Menu>
            <MeetTastComponent arrayImg={arrayImg}></MeetTastComponent>
            <Footer></Footer>
        </>
    )
}

export default MeetTastPage