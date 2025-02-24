import "./CardList.scss";
import Card from "../Card/Card";

export default function CardList({ isActive, photos }) {
    return (
        <section className="cardlist">
            {photos.map((photo) => {
                return <Card isActive={isActive} photo={photo} key={photo.id}/>
            })}
        </section>
    )
}