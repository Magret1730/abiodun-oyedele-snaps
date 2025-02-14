import "./Tags.scss";

export default function Tags({ tags, className, handleTagsClick, activeTags}) {
    return (
        <section className={className}>
            {className == "tags__filter" && <h1 className="tags__header">Filters</h1>}

            {tags.map((tag) => {
                const isActiveTag = activeTags === tag;
                return (                        
                    <button key={tag} onClick={handleTagsClick}
                        className={ `${className === "tags" ? "tags__button" : "tags__button-filter"} 
                                    ${isActiveTag ? "tags__button--clickable" : ""}` }>
                        {tag}
                    </button>
                )
            })}
        </section>
    )
}