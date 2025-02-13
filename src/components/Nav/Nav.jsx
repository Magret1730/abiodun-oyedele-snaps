import { useState } from "react";
import "./Nav.scss";
import NavButton from "../NavButton/NavButton";
import NavLogo from "../NavLogo/NavLogo";
import TagList from "../../data/tags.json";
import Tags from "../Tags/Tags";

export default function Nav() {
    const [isActive, setIsActive] = useState(false);

    const onClick = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <section className="nav">
                <NavLogo />
                <NavButton clickHandler={onClick} />
            </section>
            { isActive && 
                <Tags tags={TagList} className={"tags__filter"}/>
            }
        </>
    )
}
