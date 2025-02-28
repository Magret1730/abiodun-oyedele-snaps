import "./Nav.scss";
import NavButton from "../NavButton/NavButton";
import NavLogo from "../NavLogo/NavLogo";
import { useLocation, useParams } from "react-router-dom";
import NavBackHome from "../NavBackHome/NavBackHome";

// Displays the nav section
export default function Nav({clickHandler, isActive}) {
    const location = useLocation();
    const {id} = useParams();

    // This displays a pathname based off of if the pathname includes "/photos/"
    const photoDetailsPage = location.pathname.includes("/photo/")

    return (
        <section className="nav">
            <NavLogo />
            { photoDetailsPage && id ? <NavBackHome /> : <NavButton clickHandler={clickHandler} isActive={isActive} /> }
        </section>
    )
}
