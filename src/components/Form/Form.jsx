import { useState } from "react";
import "./Form.scss";

export default function Form() {
    const [ name, setName ] = useState("");
    const [ comment, setComment ] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    const isNameValid = () => {
        if (name.length < 2) {
            alert("Name should be greater than a letter!!!");
            return false;
        }

        return true;
    }

    const isFormValid = () => {
        if (!name || !comment) {
            alert("Fill out each fields");
            return false;
        }

        if (!isNameValid()) {
            return false;
        }

        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, comment);

        // try {
                if (isFormValid()) {
                alert("Submitted successfully!!!");
                setName("");
                setComment("");

                // await axios.post(`url`, { name, comment });
                // fetchComments()
            } else {
                console.error("Error in the form");
            }
        // } catch (error) {
        //     console.error("Error from postComment", error)
        // }
        
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="form__label">Name
                <input
                    className="form__input"
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

