import { useState } from "react";
import "./Form.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

// Displays the form with neccesary validations
export default function Form({fetchComments}) {
    const [ name, setName ] = useState("");
    const [ comment, setComment ] = useState("");
    const [nameError, setNameError] = useState(false);
    const [commentError, setCommentError] = useState(false);
    const [ successMessage, setSuccessMessage ] = useState(false);

    // Id gotten from useParams
    const {id} = useParams();

    // Frontend URL gotten from env file
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    // Function handles name change in state variable
    const handleChangeName = (event) => {
        const { value } = event.target;

        setName(value);
        isNameValid(value);
    }

    // Function handles comment change in state variable
    const handleChangeComment = (event) => {
        const { value } = event.target;

        setComment(value);
        isCommentValid(value);
    }

    // Function validates change of name
    const isNameValid = (name) => {
        if (!name) {
            setNameError("Name is required!!!")
            return false;
        } else if (name.length < 2) {
            setNameError("Name must be at least two characters long!!!")
            return false;
        } else {
            setNameError("");
            return true;
        }
    }

     // Function validates change of comment
    const isCommentValid = (comment) => {
        if (!comment) {
            setCommentError("Comment is required!!!")
            return false;
        } else {
            setCommentError("")
            return true;
        }
    }

    // Function vaidates the form
    const isFormValid = () => {

        if (!isNameValid(name)) {
            return false;
        }

        if (!isCommentValid(comment)) {
            return false;
        }

        return true;
    }

    // Function handles post request of comments from backend api
    const postComment = async (name, comment) => {

        const newComment = {
            "name": name,
            "comment": comment
        }

        try {
            const response = await axios.post(`${BASE_URL}/photos/${id}/comments`, newComment);

            return response;
        } catch (error) {
            console.error("Error getting response from postComment function", error);
        }
    }

    // Function to submit form
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (isFormValid()) {
                setSuccessMessage("Submitted successfully!!!");
                setName("");
                setComment("");

                const response = await postComment(name, comment);
                if (!response) {
                    console.error("Error getting response from postComment", response);
                }

                fetchComments();
                setNameError("");
                setCommentError("");

                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000);
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
                    className={ `form__input ${ nameError ? "form__input--error" : "" }` }
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                />
            </label>
            { nameError && <p className="form__error">{ nameError }</p> }

            <label className="form__label">Comment
                <textarea
                    className={ `form__text-area ${ commentError ? "form__input--error" : "" }` }
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={handleChangeComment}
                />
            </label>
            { commentError && <p className="form__error">{ commentError }</p> }

            <div className="form__submit-box">
                { successMessage && <p className="form__success">{ successMessage }</p> }
                <button className={ `form__submit ${ successMessage ? "form__success" : "" }` }>
                    Submit
                </button>
            </div>
        </form>
    )
}

