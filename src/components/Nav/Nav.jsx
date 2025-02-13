import "./Nav.scss";
import NavButton from "../NavButton/NavButton";
import NavLogo from "../NavLogo/NavLogo";

export default function Nav({clickHandler}) {
    return (
        <section className="nav">
            <NavLogo />
            <NavButton clickHandler={clickHandler} />
        </section>
    )
}
