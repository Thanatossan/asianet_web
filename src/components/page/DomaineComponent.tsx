import React, { Fragment, useState, useEffect } from 'react'
import axios from "axios";
import { Dialog, Transition } from '@headlessui/react'

export interface IDomaineComponent {
    arrayImg: {
        id:number,
        domain_name: string,
        domain_description: string,
        image_path: string,
        link_url: string
    }[]

}


const DomaineComponent: React.FC<IDomaineComponent> = (props) => {
    const [arrayImg, setArrayImg] = React.useState([{
        id:0,
        domain_name: "",
        domain_description: "",
        image_path: "",
        link_url: ""
    }]
    );
    // var apiUrl = 'http://52.139.176.18/api/get_domain';
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     const loadImage = async () => {
    //         setLoading(true);
    //         const response = await axios.get(
    //             apiUrl);
    //         setArrayImg(response.data)
    //         setLoading(false);
    //     };
    //     loadImage()
    // },[]);

    let [isOpen, setIsOpen] = useState(false)
    const [clickedImg, setClickedImg] = useState({
        id:0,
        domain_name: "",
        domain_description: "",
        image_path: "",
        link_url: ""
    });
    function closeModal() {
        setIsOpen(false)
    }

    function openModal(img: {
        id: number;
        domain_name: string;
        domain_description: string;
        image_path: string;
        link_url: string;
    }) {
        setIsOpen(true)
        setClickedImg(img)
    }
    function replaceString(path: string) {
        return path.replaceAll("\.\./", "");
    }
    return (
        <>

            {loading ? (
                <h4>Loading...</h4>) :

                <div className="container mx-auto grid sm:grid-cols-2 mt-10 text-center susm:grid-cols-1 lg:grid-cols-3">
                    {props.arrayImg.map((img, key) => {

                        return (
                            <div key={key} >
                                <p className="font-normal mb-5 text-xl"> {img.domain_name}</p>
                                <img src={img.image_path}
                                    alt="domain img"
                                    className="h-3/5 w-80 mx-auto object-contain"
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
                                                {clickedImg.domain_name}
                                            </Dialog.Title>
                                            <div className="mt-5 ">
                                                <img src={clickedImg.image_path}
                                                    alt="domain img"
                                                    className=" w-80 mx-auto "
                                                ></img>
                                            </div>

                                            <div className="mt-2 p-8">
                                                <p className=" text-center">
                                                    {clickedImg.domain_description}
                                                </p>

                                                {clickedImg.link_url !== "" &&
                                                    <div className="mt-2 pt-5 text-center underline text-blue-400 hover:text-blue-800">

                                                        <a href={clickedImg.link_url}> Click here for more information  </a>

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
            }
        </>
    )
}
export default DomaineComponent