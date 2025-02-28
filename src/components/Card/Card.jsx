import Tags from "../Tags/Tags";
import { Link } from "react-router-dom";
import "./Card.scss"

// Card component renders a photo card with associated photographer and tags.
export default function Card({isActive, photo}) {
    return (
        <>
            <div className={ `${isActive ? "card__containers-filters" : "card__containers"}` } key={photo.id}>
                    <div className="card__container">
                        {/* Link to the detailed view of the photo */}
                        <Link key={photo.id} to={`/photo/${photo.id}`}>
                            <img className="card__image" src={photo.photo} alt={photo.photographer} />
                        </Link>
                        <p className="card__name">{photo.photographer}</p>
                    </div>
                {/* Render tags associated with the photo */}
                <Tags key={photo.tags} tags={photo.tags} className={"tags"} />
            </div>
        </>
    )
}