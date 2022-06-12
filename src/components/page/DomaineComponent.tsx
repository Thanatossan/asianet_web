import React, { useState } from "react";
import { Icon } from "@iconify/react";


export interface IDomaineComponent {
    arrayImg: {
        name: string,
        path: string,
        description: string
    }[]
}


const DomaineComponent: React.FC<IDomaineComponent> = (props) => {
    const [isOpen,setOpen] = useState(false);

    
    return (
        <>

            <div className="container mx-auto grid grid-cols-3 mt-10 text-center ">
                {props.arrayImg.map((img, key) => {
                    return (
                        <div key ={key} >
                            <h1 className="font-medium mb-3"> {img.name}</h1>
                            <img src={img.path} className="h-3/5 w-80 mx-auto"></img>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default DomaineComponent