import "./Tags.scss";

export default function Tags({ tags }) {
    // console.log(tags);

    return (
        <section className="tags">
            {tags.map((tag) => {
                return <button key={tag} className="tags__button">{tag}</button>
            })}
        </section>
    )
}