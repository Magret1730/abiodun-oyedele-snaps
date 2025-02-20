import "./DetailsCard.scss";
import DetailsTags from "../DetailsTag/DetailsTag";
import LikedOutline from "../../assets/Icons/Like_Outline.svg";

export default function DetailsCard({ photo }) {
    const likeDate = new Date(photo.timestamp).toLocaleDateString();

    return (
        <article className="details">
            <section className="details__containers" key={photo.id}>                    
                <img className="details__image" src={photo.photo} alt={photo.photographer} />

                <DetailsTags key={photo.tags} tags={photo.tags}/>

                <section className="details__container">
                    <div className="details__box">
                        <div className="details__group">
                            <img className="details__icon" src={LikedOutline} alt="Pinterest Icon" />
                            <span className="details__like">{photo.likes} likes</span>
                        </div>
                        <p className="details__box-name">Photo by <span className="details__name--space">{photo.photographer}</span></p>
                        <div className="details__date">{likeDate}</div>
                    </div>

                    <p className="details__name">Photo by <span className="details__name--space">{photo.photographer}</span></p>
                </section>
            </section>
        </article>
    )
}