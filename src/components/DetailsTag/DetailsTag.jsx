import "./DetailsTag.scss";

export default function DetailsTags({ tags, handleTagsClick}) {
    return (
        <section className="details-tags">
            {tags.map((tag, index) => {
                return (         
                    <button key={index} onClick={handleTagsClick} className="details-tags-button">{tag}</button>
                )
            })}
        </section>
    )
}