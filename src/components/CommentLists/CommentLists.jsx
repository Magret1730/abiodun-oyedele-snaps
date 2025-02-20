import "./CommentLists.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "../Comment/Comment";

export default function CommentLists({ id }) {
    const [comments, setComments] = useState([]);
    // console.log(comments.length);
    // const [id]
    // if no id, loading

    const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
    const API_KEY = "e3b638d4-7a00-4b19-8713-677d535d16cc";

    useEffect(() => {
        fetchComments();
    }, []);

    if (!comments) {
        return <div>loading...</div>
    }

    async function fetchComments() {
        try{
            const {data} = await axios.get(`${BASE_URL}/photos/${id}/comments?api_key=${API_KEY}`);
            setComments(data);
        } catch (error) {
            console.error("Error fetching comments", error)
        }
    }

    return (
        <>
            <section className="comment__length">{comments.length} Comments</section>
            {comments
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((comment) => {
                return <Comment comment={comment} key={comment.id}/>
            })}
        </>
    )
}