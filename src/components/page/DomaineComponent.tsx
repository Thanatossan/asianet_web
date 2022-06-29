import React, { Fragment, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'

export interface IDomaineComponent {
    arrayImg: {
        name: string,
        path: string,
        description: string
        link: string
    }[]

}


const DomaineComponent: React.FC<IDomaineComponent> = (props) => {

    let [isOpen, setIsOpen] = useState(false)
    const [clickedImg, setClickedImg] = useState({
        name: "",
        path: "",
        description: "",
        link: ""
    });
    function closeModal() {
        setIsOpen(false)
    }

    function openModal(img: {
        name: string;
        path: string;
        description: string;
        link: string
    }) {
        setIsOpen(true)
        setClickedImg(img)
    }
    return (
        <>


            <div className="container mx-auto grid sm:grid-cols-2 mt-10 text-center susm:grid-cols-1 lg:grid-cols-3">
                {props.arrayImg.map((img, key) => {

                    return (
                        <div key={index} >
                            <p className="font-normal mb-5 text-xl"> {img.name}</p>
                            <img src={img.path}
                                alt="domain img"
                                className="h-3/5 w-80 mx-auto"
                                onClick={() => openModal(img)}
                            ></img>
                        </div>
                    )
                })}
                <Transition appear show={isOpen} as={Fragment}  >
                    <Dialog as="div" className="relative z-10 " onClose={closeModal}>
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

                        <div className="fixed inset-0  overflow-y-auto">
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
                                    <Dialog.Panel className=" w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-2 pt-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="p"
                                            className="text-xl font-normal leading-6 text-center"
                                        >
                                            {clickedImg.name}
                                        </Dialog.Title>
                                        <div className="mt-5 ">
                                            <img src={clickedImg.path}
                                            alt="domain img"
                                                className=" w-80 mx-auto "
                                            ></img>
                                        </div>

                                        <div className="mt-2 p-8">
                                            <p className=" text-center">
                                                {clickedImg.description}
                                            </p>

                                            {clickedImg.link !== ""  &&
                                            <div className="mt-2 pt-5 text-center underline text-blue-400 hover:text-blue-800">

                                            <a href={clickedImg.link}> Click here for more information  </a>

                                            </div>
                                            }
                                        </div>




                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>

        </>
    )
}
export default DomaineComponent