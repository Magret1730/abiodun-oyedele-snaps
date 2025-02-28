import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import CommentList from "../../components/CommentLists/CommentLists";

function Photo() {
    const { id } = useParams();

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [photo, setPhoto] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchPhotos();
        fetchComments();
    }, []);

    // Fetches photo from backend api
    async function fetchPhotos() {
        try {
            const {data} = await axios.get(`${BASE_URL}/photos/${id}`);
            setPhoto(data);
        } catch (error) {
            console.error("Error in fetchPhotos", error);
        }
    }

    if (!photo) {
        return <div>loading...</div>
    }

    if (!comments) {
        return <div>loading...</div>
    }

    // Fetches comments from backend api
    async function fetchComments() {
        try{
            const {data} = await axios.get(`${BASE_URL}/photos/${id}/comments`);

            setComments(data);
        } catch (error) {
            console.error("Error fetching comments", error)
        }
    }

    return (
        <>
            <Nav />
            <DetailsCard photo={photo}/>
            <Form fetchComments={fetchComments}/>
            <CommentList id={id} comments={comments}/>
            <Footer />
        </>
    )
}

export default Photo;