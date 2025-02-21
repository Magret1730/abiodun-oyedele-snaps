import { useState } from "react";
import "./Form.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Form({fetchComments}) {
    const [ name, setName ] = useState("");
    const [ comment, setComment ] = useState("");
    // const [nameError, setNameError] = useState(false);
    // const [commentError, setCommentError] = useState(false);

    const {id} = useParams();
    const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
    const API_KEY = "e3b638d4-7a00-4b19-8713-677d535d16cc";


    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    const isNameValid = () => {
        if (!name) {
            alert("Fill out the name field");
            return false;
        }

        if (name.length < 2) {
            alert("Name should be greater than one length!!!");
            return false;
        }

        return true;
    }

    const isCommentValid = () => {
        if (!comment) {
            alert("Fill out the comment field");
            return false;
        }

        return true;
    }

    const isFormValid = () => {
        // if (!name || !comment) {
        //     alert("Fill out each fields");
        //     return false;
        // }

        if (!isNameValid()) {
            return false;
        }

        if (!isCommentValid()) {
            return false;
        }

        return true;
    }

    const postComment = async (name, comment) => {

        const newComment = {
            "name": name,
            "comment": comment
        }

        try {
            const response = await axios.post(`${BASE_URL}/photos/${id}/comments?api_key=${API_KEY}`, newComment);

            return response;
        } catch (error) {
            console.error("Error getting response from postComment function", error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (isFormValid()) {
                alert("Submitted successfully!!!");
                setName("");
                setComment("");

                const response = await postComment(name, comment);
                if (!response) {
                    console.error("Error getting response from postComment", response);
                }

                fetchComments();
            } else {
                console.error("Error in the form");
            }
        } catch (error) {
            console.error("Error from postComment", error)
        }
        
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="form__label">Name
                <input
                    className="form__input"
                    // className={`form__input ${ isNameValid() === false ? "" : "form__input--error" }`}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                />
            </label>

            <label className="form__label">Comment
                <textarea
                    className="form__text-area"
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={handleChangeComment}
                />
            </label>

            <div className="form__submit-box">
                <button className="form__submit">Submit</button>
            </div>
        </form>
    )
}

