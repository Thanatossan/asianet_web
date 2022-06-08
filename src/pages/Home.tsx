import React from 'react';
import Navbar from '../components/main/Navbar';
export interface IHomePageProps{}

const HomePage: React.FC<IHomePageProps> = (props) =>{
    return(
        <>
        <div>
            <Navbar></Navbar>
        </div>
        </>
    )
}

export default HomePage