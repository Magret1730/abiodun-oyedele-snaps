import "./NavBackHome.scss";
import ArrowIcon from "../../assets/images/Arrow.svg";
import { Link } from "react-router-dom";

// Displays the back home on the details page
export default function NavBackHome() {
    return (
        <>
            <Link to="/" className="back">
                <section className="back__container">
                    <img className="back__icon" src={ArrowIcon} alt="Arrow" />
                    <p className="back__text">Home</p>
                </section>
            </Link>
        </>
    )
}