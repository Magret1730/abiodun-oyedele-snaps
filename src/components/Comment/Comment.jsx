import "./Comment.scss";

export default function Comment({ comment}) {
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