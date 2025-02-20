import "./CardList.scss";
import Tags from "../Tags/Tags";
import { Link } from "react-router-dom";

export default function CardList({ isActive, photos }) {
    return (
        <section className="cardlist">
            {photos.map((photo) => {
                return (
                    <div className={ `${isActive ? "cardlist__containers-filters" : "cardlist__containers"}` } key={photo.id}>
                            <div className="cardlist__container">
                                <Link key={photo.id} to={`/photo/${photo.id}`}>
                                    <img className="cardlist__image" src={photo.photo} alt={photo.photographer} />
                                </Link>
                                <p className="cardlist__name">{photo.photographer}</p>
                            </div>

                        <Tags key={photo.tags} tags={photo.tags} className={"tags"} />
                    </div>
                )
            })}
        </section>
    )
}