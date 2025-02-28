import "./CommentLists.scss";
import Comment from "../Comment/Comment";

// Components renders a list of comments associated with a particular item.
export default function CommentLists({ comments }) {
    return (
        <section className="comments">
            <section className="comments__length">
                {comments.length} {comments.length === 1 || comments.length === 0 ? "Comment" : "Comments"}
            </section>

            {comments
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((comment) => {
                    return <Comment comment={comment} key={comment.id}/>
            })}
        </section>
    )
}