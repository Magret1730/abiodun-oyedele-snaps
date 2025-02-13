import "./NavButton.scss";
import FilterIcon from "../../assets/Icons/Filter.svg";

export default function NavButton({ clickHandler }) {
    return (
        <button className="button" onClick={clickHandler} >Filters
            <img className="button__image" src={FilterIcon} alt="Filter Icon" />
        </button>
    )
}