import Tags from "../Tags/Tags";
import { Link } from "react-router-dom";
import "./Card.scss"

export default function Card({isActive, photo}) {
    return (
        <>
            <div className={ `${isActive ? "card__containers-filters" : "card__containers"}` } key={photo.id}>
                    <div className="card__container">
                        <Link key={photo.id} to={`/photo/${photo.id}`}>
                            <img className="card__image" src={photo.photo} alt={photo.photographer} />
                        </Link>
                        <p className="card__name">{photo.photographer}</p>
                    </div>

                <Tags key={photo.tags} tags={photo.tags} className={"tags"} />
            </div>
        </>
    )
}