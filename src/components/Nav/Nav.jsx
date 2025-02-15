import "./Nav.scss";
import NavButton from "../NavButton/NavButton";
import NavLogo from "../NavLogo/NavLogo";

export default function Nav({clickHandler, isActive}) {
    return (
        <section className="nav">
            <NavLogo />
            <NavButton clickHandler={clickHandler} isActive={isActive} />
        </section>
    )
}
