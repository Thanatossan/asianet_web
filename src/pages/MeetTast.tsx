import React, { useEffect , useState } from 'react';
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import MeetTastComponent from "../components/page/MeetTastComponent";
import Lottie from "lottie-react";
import loadAnimation from "../images/loading.json";
import axios from 'axios';
const arrayImg = [{
    name: "Meet and Taste 1",
    arrayPath: ["/assets/page/meetTast/1/MEET _ TEST1.png",
    "/assets/page/meetTast/1/MEET _ TEST2.png",
    "/assets/page/meetTast/1/MEET _ TEST3.png",
    "/assets/page/meetTast/1/MEET _ TEST4.png",
    "/assets/page/meetTast/1/MEET _ TEST5.png",
    "/assets/page/meetTast/1/MEET _ TEST6.png",
    "/assets/page/meetTast/1/MEET _ TEST7.png",
    "/assets/page/meetTast/1/MEET _ TEST8.png",

],
    description: "We have the place to offer you for arrangement workshop or event with big outdoor garden. It is located in Demigny where is just 15 minutes away from Beaune by driving. If you are looking for place to have any event suchas wine tasting, creative meeting, workshop, seminar, business lunch or dinner, party, weeding or others. This place is the great choice for you as there are fully of facilities, 4 restrooms, chairs, tables, rooms for staying overnight if you wish and the capacity indoor is 50-60 people and more than 150 people for outdoor. For more information and price for rental please directly contact us."
    ,topic_id:0
}
]
const MeetTastPage = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [getTasteList,getTaste] = useState([]);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        axios.get(`https://asianetnew-obpywej2ya-lz.a.run.app/api/get_taste`).then((response)=>{
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
        })
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