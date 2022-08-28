import React, { useEffect , useState } from 'react';
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import MeetTastComponent from "../components/page/MeetTastComponent";
import Lottie from "lottie-react";
import loadAnimation from "../images/loading.json";
import axios from 'axios';

const MeetTastPage = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [getTasteList,getTaste] = useState([]);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        axios.get(`https://asianetnew-obpywej2ya-lz.a.run.app/api/get_taste`).then((response) => {

            var arrayimg: any = []
            var topic_list: any = []
            var last: number = 0;
            response.data.forEach((taste: any) => {
                if (!topic_list.includes(taste.topic_id)) {
                    var img = {
                        name: taste.taste_name,
                        arrayPath: [taste.path],
                        description: taste.taste_description,
                        topic_id: taste.topic_id
                    }
                    topic_list.push(taste.topic_id)
                    arrayimg.push(img);
                }
                else {
                    arrayimg.forEach((img: any) => {
                        if (taste.topic_id == img.topic_id) {
                            img.arrayPath.push(taste.path)
                        }
                    });
                }
                getTaste(arrayimg);

            }
            );

        }
        )
            .catch(error => console.error(`Error : ${error}`));
    }, [])
    return (

        <>

                <div>
                    <Navbar></Navbar>
                    <Menu current={'Meet & Taste'} descript={''}></Menu>
                    <MeetTastComponent arrayImg={getTasteList}></MeetTastComponent>
                    <Footer></Footer>
                </div>

        </>
    )

}

export default MeetTastPage