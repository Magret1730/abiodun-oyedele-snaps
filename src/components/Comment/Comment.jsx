import "./Comment.scss";

// Comment Component renders a user's comment with their name and the date of the comment.
export default function Comment({ comment}) {
    // Formatting the timestamp into a readable date string
    const formattedDate = new Date(comment.timestamp).toLocaleDateString();

    return (
        <section className="comment">
            <section className="comment__box">
                <div className="comment__name">{comment.name}</div>
                <div className="comment__date">{formattedDate}</div>
            </section>
            <section className="comment__comment">{comment.comment}</section>
        </section>
    )
}
