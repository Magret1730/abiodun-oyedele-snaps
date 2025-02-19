import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
// import { Link } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Footer from "../../components/Footer/Footer";

function Photo() {
    const { id } = useParams();
    const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
    const API_KEY = "e3b638d4-7a00-4b19-8713-677d535d16cc";

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        fetchPhotos();
    }, []);

    async function fetchPhotos() {
        try {
            const { data } = await axios.get(`${BASE_URL}/photos/${id}?api_key=${API_KEY}`);
            setPhoto(data);
        } catch (error) {
            console.log("Error in fetchPhotos", error);
        }
    }

    if (!photo) {
        return <div>loading...</div>
    }

    return (
        <>
            <Nav />
            <DetailsCard photo={photo}/>
            <Footer />
        </>
    )
}

export default Photo;