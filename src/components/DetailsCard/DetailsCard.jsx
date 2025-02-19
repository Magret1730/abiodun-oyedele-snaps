import Tags from "../Tags/Tags";
import "./DetailsCard.scss";
import Pinterest from "../../assets/Icons/Pinterest.svg";

export default function DetailsCard({ photo }) {
    const likeDate = new Date(photo.timestamp).toLocaleDateString();

    return (
        <article className="details">
            <section className="details__containers" key={photo.id}>                    
                <img className="details__image" src={photo.photo} alt={photo.photographer} />

                <Tags key={photo.tags} tags={photo.tags} className={"tags__details"} />

                <section className="details__container">
                    <div className="details__box">
                        <div className="details__group">
                            <img className="details__icon" src={Pinterest} alt="Pinterest Icon" />
                            <span className="details__like">{photo.likes} likes</span>
                        </div>
                        <div className="details__date">{likeDate}</div>
                    </div>

                    <p className="details__name">Photo by <span className="details__name--space">{photo.photographer}</span></p>
                </section>
            </section>
        </article>
    )
}