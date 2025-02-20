import "./Comment.scss";

export default function Comment({ comment}) {
    const formattedDate = new Date(comment.timestamp).toLocaleDateString();

    return (
        <section className="comment">
                <section className="comment__box">
                    <div>{comment.name}</div>
                    <div>{formattedDate}</div>
                </section>
                <section className="comment__comment">{comment.comment}</section>
        </section>
    )
}