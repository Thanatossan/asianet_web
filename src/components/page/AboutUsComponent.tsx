import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export interface IAboutUsComponent {
    arrayImg: {
        name: string,
        path: string,
        description: string
    }[]
}
const AboutUsComponent: React.FC<IAboutUsComponent> = (props) => {
    return (
        <>
            <div className="">
                <div className="container mx-auto w-72 ">
                    <Carousel showArrows={true} showThumbs={false} showStatus={false} className="pt-10 py-3" >
                        {props.arrayImg.map((img, key) => {
                            return (
                                <div key={key} >
                                    <img src={img.path} className=""
                                    />
                                </div>
                            )
                        })}
                    </Carousel>

                </div>
                <div className="container mx-auto px-0 flex flex-row text-justify indent-8 mb-5 ">
                <div className="px-4 susm:block md:hidden">
                        <p className="">
                            Asianet Fine Sourcing is a premium Wine Agency
                            dedicated to bringing fine Burgundy wine to ASIAN
                            markets.
                        </p>
                        <p>
                            We are sourcing wine from small family-owned domains
                            as well as from innovative producers whose wine offers
                            outstanding value for money. Asianet Fine Sourcing
                            maximizes the potential of these products by selecting the
                            most relevant importers for each market of
                            the ASEAN region.
                        </p>
                        <p>
                            We also source wine estates of other
                            regions of France at the request of our trade partners.
                        </p>
                    </div>
        
                    <div className="basis-1/2 px-4 susm:hidden md:block">
                        <p className="">
                            Asianet Fine Sourcing is a premium Wine Agency
                            dedicated to bringing fine Burgundy wine to ASIAN
                            markets.
                        </p>
                        <p>
                            We are sourcing wine from small family-owned domains
                            as well as from innovative producers whose wine offers
                            outstanding value for money. Asianet Fine Sourcing
                            maximizes the potential of these products by selecting the
                            most relevant importers for each market of
                            the ASEAN region.
                        </p>
                        <p>
                            We also source wine estates of other
                            regions of France at the request of our trade partners.
                        </p>
                    </div>

                    <div className="basis-1/2 px-4 susm:hidden md:block ">
                        <p>
                            Our market experience and our connections in the Wine
                            trade in South East Asia make us the perfect link between
                            producers and importers. On every specific market, we help
                            you to build the foundations for lasting winning
                            partnerships.
                        </p>
                        <p>
                            We focus on sourcing premium wine from
                            Burgundy and we are currently working with more than
                            20 domains.
                        </p>
                    </div>
                   
                </div>
                <div className="flex-grow border-t border-gray mt-5 mb-5"></div>
            </div>
        </>
    )
}
export default AboutUsComponent