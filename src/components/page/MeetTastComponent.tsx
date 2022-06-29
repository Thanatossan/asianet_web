import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export interface IMeetTastComponent {
    arrayImg: {
        name: string,
        arrayPath: string[],
        description: string
    }[]
}

const MeetTastComponent:React.FC<IMeetTastComponent> = (props) =>{
    return(
        <>
            <div className="container mx-auto mb-8">
                        {props.arrayImg.map((img, key) => {
                            return (
                                <div key={key}  >
                                    <Carousel showArrows={true} showThumbs={false} showStatus={false} className="pt-10 py-3 w-72 mx-auto" >
                                    {img.arrayPath.map((path,key)=>{
                                        return (
                                            <div key={key}>
                                                <img src={path} className=""/>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                                
                                <h1 className="text-center ">{img.description}</h1>
                                </div>
                            )
                        })}
            </div>
        </>
    )
}

export default MeetTastComponent