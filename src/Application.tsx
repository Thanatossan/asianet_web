import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import DomainePage from "./pages/Domaine";
import MeetTastPage from "./pages/MeetTast";
import NewGalleryPage from "./pages/NewGallery";
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";
export interface IApplicationProps{}

const Application: React.FC<IApplicationProps> = (props)=>{
    return <BrowserRouter>
            <Routes> 
                <Route path="/" element ={<HomePage/>} />
                <Route path="/domaine" element ={<DomainePage/>} />
                <Route path="/meetTast" element ={<MeetTastPage/>} />
                <Route path="/newGallery" element ={<NewGalleryPage/>} />
                <Route path="/aboutUs" element ={<AboutUsPage/>} />
                <Route path="/contactUs" element ={<ContactUsPage/>} />
            </Routes>
    </BrowserRouter>
}
export default Application;
 