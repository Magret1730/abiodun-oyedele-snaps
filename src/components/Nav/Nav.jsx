import "./Nav.scss";
import NavButton from "../NavButton/NavButton";
import NavLogo from "../NavLogo/NavLogo";
import { useLocation, useParams } from "react-router-dom";
import NavBackHome from "../NavBackHome/NavBackHome";

export default function Nav({clickHandler, isActive}) {
    const location = useLocation();
    const {id} = useParams();

    const photoDetailsPage = location.pathname.includes("/photo/")

    return (
        <section className="nav">
            <NavLogo />
            { photoDetailsPage && id ? <NavBackHome /> : <NavButton clickHandler={clickHandler} isActive={isActive} /> }
        </section>
    )
}
