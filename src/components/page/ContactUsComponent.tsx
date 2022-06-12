import React from "react";

const ContactUsComponent = () => {
    return (
        <>
            <div className="container mx-auto">
                <p className="text-center mt-7">Send us a message, and we will contact you to arrange a meeting</p>
                <div className="container mx-auto flex flex-row text-justify mb-5 ">
                    <div className="basis-1/5 px-4 flex flex-col py-16 mx-auto text-center">
                        <img src="/assets/page/contactUs/IMG_2966.PNG" className=" mx-auto mt-10 w-64 h-52"></img>

                    </div>

                    <div className="basis-3/5 flex flex-col my-10 px-4 mx-auto   ">
                        <form className="w-3/4 mx-auto">
                            <div className="mb-4 space-y-4">
                                <input className="shadow appearance-none placeholder-mainColor border-mainColor border-2 rounded w-full py-2 px-3 text-mainColor leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name*" />
                                <input className="shadow appearance-none placeholder-mainColor border-mainColor border-2 rounded w-full py-2 px-3 text-mainColor leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email*" />
                                <textarea rows={10} className="shadow appearance-none rounded w-full py-2 px-3 border-2 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Message"></textarea>
                                
                                <p className="text-left"> *Require field</p>
                            </div>
                            <button className="shadow bg-mainColor w-full focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                                </button>
                            
                        </form>
                    </div>
                    <div className="basis-1/5 flex flex-col px-4 py-16 mx-auto text-center ">
                        <img src="/assets/page/contactUs/IMG_2967.PNG" className=" mx-auto mt-10 w-64 h-52"></img>
                    </div>
                </div>

            </div>

        </>
    )
}
export default ContactUsComponent