import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export interface IOurServicesComponent {
    arrayImg: {
        name: string,
        path: string,
        description: string
    }[]
}
const OurserviceComponent : React.FC<IOurServicesComponent> = (props) => {
    return (
        <>
            <div className="my-5 ">
                <div className=" flex h-10  mx-auto my-5 ">
                    <h1 className="text-center m-auto py-1 px-5 text-white font-semibold text-xl rounded-full bg-mainColor"> Our Service </h1>
                </div>

                <div className="container mx-auto flex-row text-justify mb-5 md:flex">
                    <div className="basis-1/2 px-4 flex justify-center">
                        <img src="/assets/page/ourServices/servicesForImporter/services for importers 2.JPG" className="my-10 w-[32rem]"></img>

                    </div>

                    <div className="basis-1/2 px-4">
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t-4 border-secondColor"></div>
                            <span className="flex-shrink mx-2 text-xl font-normal">Services for importers</span>
                            <div className="flex-grow border-t-4 border-secondColor"></div>
                        </div>
                        <div className="indent-8 text-justify space-y-4">
                            <div>
                            <p> Asianet Fine Sourcing introduces you to a selection of wine, including some of the most prestigious estates from Burgundy. We help you to build your portfolio and source quality wineries/distilleries that match your needs.</p>
                            <p> We facilitate your negotiation when you need to get more allocations from prestigious wine estates who have limited available quantities.</p>
                            </div>
                            <div>
                            <p> We provide you with reliable information about your suppliers, their products and help you maintaining good relations and building lasting partnerships. We provide you support to organize events, master class and promotional activities.</p>
                            </div>
                        </div>
                        <div className="flex-grow border-t-4 border-secondColor mt-5"></div>
                    </div>
                </div>

                <div className="container mx-auto   flex-row text-justify mb-5 md:flex">
                    <div className="basis-1/2 px-4 flex py-10 justify-center">
                    <Carousel showArrows={true} showThumbs={false} showStatus={false} className="pt-10 w-[32rem]" >
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

                    <div className="basis-1/2 px-4">
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t-4 border-secondColor"></div>
                            <span className="flex-shrink mx-2 text-lg">Services for producers</span>
                            <div className="flex-grow border-t-4 border-secondColor"></div>
                        </div>
                        <div className="indent-8 text-justify space-y-4 ">
                            <p>The different legal systems, as well as cultural, social, historical and religious particularities, make each country of ASEAN a different market. They must be part of a long-term strategy with a focus on relationship management. Asian importers place much more value on person relationships than managers in Western countries. In a business situation, Asian managers will place a great deal of emphasis on knowing one's counterpart before entering into an agreement, as part of a risk reduction strategy. If they do not like you, they will not buy from you.
                            </p>

                            <p> We help you to build relationships that will lead to a lasting beneficial business partnership. We expand your market and build your image in ASEAN by targeting the most relevant importers to develop your sales through the right distribution channels. We monitor trends, competition and provide strategic information on local markets. We offer you visibility and protect your interests and your brand image.</p>
                        </div>

                        <div className="flex-grow border-t-4 border-secondColor mt-5 mb-5"></div>
                    </div>
                </div>
                <div className="container mx-auto  flex-row text-justify  mb-5 md:flex">
                    <div className="basis-1/2 px-4 flex justify-center">
                        <img src="/assets/page/ourServices/servicesForAsian/Service for Asian collectors.png" className="my-12 w-[32rem]"></img>
                        

                    </div>
                        
                    <div className="basis-1/2 px-4">
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t-4 border-secondColor"></div>
                            <span className="flex-shrink mx-2 text-xl font-normal">Services for Asian collectors</span>
                            <div className="flex-grow border-t-4 border-secondColor"></div>
                        </div>
                        <div className=" text-justify space-y-4">
                            <div className="indent-8">
                            <p> We help you to source the world’s greatest, and sometimes hardest to acquire, fine wines.
In Asia the prevalence of fake bottles is rising and provenance should be the key factor for fine wine collectors. That's why we are only working with Chateaux/Domains and reputable wine merchants who can guaranty the origin of the wine. 
</p>
                            </div>
                            <div>
                            <p> There are only two reliable sources for collectible wines:</p>

                            <p>1). Ex-Chateau/Domain, the wine comes directly from the cellar of the producer.</p>
                            <p>2). Well established wine merchant who can prove that the wine has never been stored elsewhere than at the Chateau/Domain's cellar and at the wine merchant's warehouse.</p>
                            </div>
                        </div>
                        <div className="flex-grow border-t-4 border-secondColor mt-5 mb-10" ></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurserviceComponent