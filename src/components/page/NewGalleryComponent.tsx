import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export interface INewGalleryComponent {
    arrayImg: {
        name: string,
        arrayPath: string[],
        description: string
    }[]
}
const NewGalleryComponent: React.FC<INewGalleryComponent> = (props) => {
    return (
        <>
            <div className="flex h-10  mx-auto my-5 ">
                <h1 className="text-center m-auto py-2 px-5 text-white  text-xl rounded-full bg-mainColor"> The reasons to visit Beaune </h1>
            </div>
            <div className="container mx-auto flex flex-row text-justify mb-5 ">
                <div className="basis-1/2 px-4 flex flex-col justify-center mx-auto text-center susm:hidden sm:block">
                    <img src="/assets/page/newGallery/News and Gallery 19 (1).png" className=" mx-auto mt-10 w-64 h-52"></img>
                    <h1>Burgundy Vineyard cycling route</h1>
                </div>

                <div className="basis-1/2 flex flex-col px-4 justify-center mx-auto text-center susm:hidden sm:block">
                    <img src="/assets/page/newGallery/News and Gallery 19 (3).png" className=" mx-auto mt-10 w-64 h-52"></img>
                    <h1>Wine tasting</h1>
                </div>
            </div>
            
            <div className="container mx-auto mb-5">
            <div className="basis-1/2 px-4 flex flex-col justify-center mx-auto text-center susm:block sm:hidden">
                    <img src="/assets/page/newGallery/News and Gallery 19 (1).png" className=" mx-auto mt-10 w-[35rem] h-auto"></img>
                    <h1>Burgundy Vineyard cycling route</h1>
                </div>
            <div className="basis-1/2 flex flex-col px-4 justify-center mx-auto text-center susm:block sm:hidden ">
                    <img src="/assets/page/newGallery/News and Gallery 19 (3).png" className=" mx-auto mt-10 w-[35rem] h-auto"></img>
                    <h1>Wine tasting</h1>
                </div>
                <div className="flex flex-col px-4 justify-center mx-auto text-center">
                    <img src="/assets/page/newGallery/News and Gallery 19 (2).png" className=" mx-auto mt-10 w-[32rem] h-auto"></img>
                    <h1 >Hospices de Beaune</h1>
                </div>
                
            </div>
            <div className="container mx-auto ">
                <p className="text-center">
                    A Town of Art and History and the capital of Burgundy wine, Beaune is located forty kilometers or so south of Dijon. The old town contains some remarkable monuments and has some beautiful Renaissance mansions for visitors to admire. This is also the place, producing prestigious wines of exceptional quality including world famous Grand Crus and uses organic agriculture. There are many activities to do in Beaune such as visiting the Hospices de Beaune, Wine tasting, Cycling around the vineyard route.
                </p>
            </div>
            <div className="flex-grow border-t border-gray mt-5 mb-5"></div>

            <div className="flex h-10  mx-auto my-5 ">
                <h1 className="text-center m-auto py-2 px-20 text-white  text-xl rounded-full bg-mainColor"> Gallery </h1>
            </div>
            <div className="container mx-auto mb-8">
                        {props.arrayImg.map((img, key) => {

                            return (
                                <div key={key}  >
                                    <Carousel showArrows={true} showThumbs={false} showStatus={false} className="pt-10 py-3 w-[32rem] mx-auto" >
                                    {img.arrayPath.map((path,key)=>{
                                        return (
                                            <div key={key}>
                                                <img src={path} className=""/>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                                <h1 className="text-center font-medium mb-5">{img.name}</h1>
                                <h1 className="text-center ">{img.description}</h1>
                                </div>
                            )
                        })}
            </div>
        </>
    )
}
export default NewGalleryComponent