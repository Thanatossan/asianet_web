import React, { useRef, useState, Fragment ,useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Dialog, Transition } from '@headlessui/react'
import Lottie from "lottie-react";
import checkAnimation from "../../images/check.json";
const ContactUsComponent = () => {
    const form = useRef();
   
    function closeModal() {
        setIsOpen(false)
        window.location.reload()
    }

    function openModal() {
        setIsOpen(true)
    }
   
    let [isOpen, setIsOpen] = useState(false)
    let [name , setName] = useState("")
    let [email , setEmail] = useState("")
    let [ErrorName , setErrorName] = useState("")
    let [ErrorEmail , setErrorEmail] = useState("")


    const validate= (name,email) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (name == ""){
            setErrorName("Required!");
        }
        if(email == ""){
            setErrorEmail("Required!");
        }
        else if (!regex.test(email)) {
            setErrorEmail("This is not a valid email format!");
          }
        if(ErrorName == "" && ErrorEmail == ""){
            return true
        }
    }
    const sendEmail = (e) => {
        
        e.preventDefault();
        if (validate(name,email)){

            emailjs.sendForm('service_6jeffsa', 'template_z6vwe5b', e.target, '3Rb05cuqiD1-sZLmj')
            .then((result) => {
                console.log(result.text);
                openModal();  
                
            }, (error) => {
                console.log(error.text);
            });

        }
    }
    return (
        <>

            <div className="container mx-auto ">
                <p className="text-center mt-7 lg:hidden susm:block">Send us a message</p>
                <p className="text-center mt-7 susm:hidden lg:block">Send us a message, and we will contact you to arrange a meeting</p>
                <div className="container mx-auto flex flex-row text-justify mb-5 ">
                    <div className="basis-1/5 px-4 flex flex-col py-16 mx-auto text-center susm:hidden lg:block">
                        <img src="/assets/page/contactUs/IMG_2966.PNG" className=" mx-auto mt-10 w-64 h-52"></img>

                    </div>

                    <div className="basis-3/5 flex flex-col my-10 px-4 mx-auto   ">
                        <form className="sm:w-3/4 sm:mx-auto" ref={form} onSubmit={sendEmail} id="form">
                            <div className="mb-4 space-y-4">
                                <input 
                                onChange={e=> setName(e.target.value)}
                                className="shadow appearance-none placeholder-mainColor border-mainColor border-2 rounded w-full py-2 px-3 text-mainColor leading-tight focus:outline-none focus:shadow-outline" type="text" name="from_name" placeholder="Name*" />
                                <p className="text-red-600">{ErrorName}</p>
                                <input 
                                onChange={e=> setEmail(e.target.value)}
                                className="shadow appearance-none placeholder-mainColor border-mainColor border-2 rounded w-full py-2 px-3 text-mainColor leading-tight focus:outline-none focus:shadow-outline" type="email" name="from_email" placeholder="Email*" />
                                <p className="text-red-600">{ErrorEmail}</p>
                                <textarea rows={10} className="shadow appearance-none rounded w-full py-2 px-3 border-2 text-gray-700 focus:outline-none focus:shadow-outline " placeholder="Message" name="message"></textarea>


                                <p className="text-left"> *Require field</p>
                            </div>
                            <button type="submit" value="Send" form="form" className="shadow bg-mainColor w-full focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                Send
                            </button>

                        </form>
                    </div>
                    <div className="basis-1/5 flex flex-col px-4 py-16 mx-auto text-center susm:hidden lg:block ">
                        <img src="/assets/page/contactUs/IMG_2967.PNG" className=" mx-auto mt-10 w-64 h-52"></img>
                    </div>
                </div>

            </div>
            <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <p className="text-mt text-center ">
                      Message have been sent.
                    </p>
                    <Lottie animationData={checkAnimation} className= "w-20 mx-auto"loop={false} />
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}
export default ContactUsComponent