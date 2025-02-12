import "./Nav.scss";
import NavButton from "../NavButton/NavButton";

export default function Nav() {
    return (
        <section className="nav">
            <h1 className="nav__header">Snaps</h1>
            <NavButton />
        </section>
    )
}