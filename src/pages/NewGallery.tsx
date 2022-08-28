import React, { useEffect ,useState} from 'react';
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import NewGalleryComponent from "../components/page/NewGalleryComponent";
import Lottie from "lottie-react";
import axios from 'axios';
import loadAnimation from "../images/loading.json";
export interface INewGalleryProps { }


const NewGalleryPage: React.FC<INewGalleryProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [galleryList,getGallery] = useState([]);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        axios.get(`https://asianetnew-obpywej2ya-lz.a.run.app/api/get_gallery`).then((response)=>{
            var arrayimg: any = []
            var topic_list: any = []
            var last: number = 0;
            response.data.forEach((gallery: any) => {
                if (!topic_list.includes(gallery.topic_id)) {
                    var img = {
                        name: gallery.gallery_name,
                        arrayPath: [gallery.path],
                        description: gallery.gallery_description,
                        topic_id: gallery.topic_id
                    }
                    topic_list.push(gallery.topic_id)
                    arrayimg.push(img);
                }
                else {
                    arrayimg.forEach((img: any) => {
                        if (gallery.topic_id == img.topic_id) {
                            img.arrayPath.push(gallery.path)
                        }
                    });
                }
                getGallery(arrayimg);
                
            }
            );
        })
        .catch(error => console.error(`Error : ${error}`));
    }, [])
    return (
        <>

                <div>
                    <Navbar></Navbar>
                    <Menu current={'News & Gallery'} descript={''}></Menu>
                    <NewGalleryComponent arrayImg={galleryList}></NewGalleryComponent>
                    <Footer></Footer>
                </div>

        </>
    )
}

export default NewGalleryPage