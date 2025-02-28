import "./CardList.scss";
import Card from "../Card/Card";

// CardList Component renders a list of photo cards.
export default function CardList({ isActive, photos }) {
    return (
        <section className="cardlist">
            {/* Iterating over the photos array and rendering a Card component for each photo */}
            {photos.map((photo) => {
                return <Card isActive={isActive} photo={photo} key={photo.id}/>
            })}
        </section>
    )
}