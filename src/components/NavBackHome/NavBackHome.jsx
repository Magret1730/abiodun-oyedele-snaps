import "./NavBackHome.scss";
import ArrowIcon from "../../assets/Icons/Arrow.svg";
import { Link } from "react-router-dom";

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