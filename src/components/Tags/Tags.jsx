import "./Tags.scss";

export default function Tags({ tags, className }) {

    return (
        <section className={className}>
            {className == "tags__filter" && <h1 className="tags__header">Filters</h1>}

            {tags.map((tag) => {
                return (                        
                    <button key={tag} className={ `${className === "tags" ? "tags__button" : "tags__button-filter"}` }>{tag}</button>
                )
            })}
        </section>
    )
}