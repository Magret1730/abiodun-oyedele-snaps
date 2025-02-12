import photos from "../../data/photos.json";
import "./CardList.scss";
import Tags from "../Tags/Tags";

export default function CardList() {
    return (
        <section className="cardlist">
            {photos.map((photo) => {
                return (
                    <div className="cardlist__containers" key={photo.id}>
                        <div className="cardlist__container">
                            <img className="cardlist__image" src={photo.photo} alt={photo.photographer} />
                            <div className="cardlist__name">{photo.photographer}</div>
                        </div>
                        <Tags key={photo.tags} tags={photo.tags}/>
                    </div>
                )                
            })}
        </section>
    )
}