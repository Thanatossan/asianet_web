import React from "react";
import { Link } from "react-router-dom";
export interface IMenu{
    current: string
    descript: string
}
const Menu : React.FC<IMenu> = (props) => {
return(
    <>
    {/* <div className="bg-fixed w-full bg-cover bg-center file: text-white" style={
        {backgroundImage: "url(/assets/main/menubackground.png)"}
        }> */}

        <div className='bg-[url("/src/images/menubackground.png")] text-white bg-no-repeat w-full bg-fixed bg-cover '>
            <div className="h-48">
            <div className="container mx-auto">
                <div className="flex items-center justify-between pt-6 font-semibold susm:hidden md:flex">
                    
                    <a href="/"> Home </a>
                    <a href="/aboutUs"> About us </a>
                    <a href="/domaine"> Domaine </a>
                    <a href="/newGallery"> News & Gallery </a>
                    <a href="/meetTast"> Meet & Taste </a>
                    <a href="/contactUs">Contact Us</a>

                </div>
                
                <div className="flex  items-center justify-center pt-6 mx-auto">
                 <h1 className="text-5xl" > {props.current}</h1>
                </div>
                <div className="flex  items-center justify-center pt-6 mx-auto">
                 <p > {props.descript}</p>
                </div>
                </div>

            </div>
    </div>
    {/* <div className="bg-black h-44 w-full bg-cover bg-center relative">
    <img src="/assets/main/menubackground.png" className="w-full h-full object-cover " />
    </div> */}
    </>
)
}
export default Menu