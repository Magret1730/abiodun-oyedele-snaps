import "./CommentLists.scss";
import Comment from "../Comment/Comment";

export default function CommentLists({ comments }) {

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