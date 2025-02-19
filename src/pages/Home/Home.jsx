import { useEffect, useState } from "react";
import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import TagList from "../../data/tags.json";
import Tags from "../../components/Tags/Tags";
import axios from "axios";

function Home() {
    const [photos, setPhotos] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [activeTags, setActiveTags] = useState(null);
    const [filteredPhotos, setFilteredPhotos] = useState([]);

    const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
    const API_KEY = "e3b638d4-7a00-4b19-8713-677d535d16cc";

    useEffect(() => {
        fetchPhotos();
    }, []);

    async function fetchPhotos() {
        try {
            const { data } = await axios.get(`${BASE_URL}/photos?api_key=${API_KEY}`);
            setPhotos(data);
            setFilteredPhotos(data);
        } catch (error) {
            console.log("Error in fetchPhotos", error);
        }
    }

    if (!photos) {
        return <div>loading...</div>
    }

    const onClick = () => {
        setIsActive(!isActive);
    }

    const handleFilterClick = (e) => {
        const clickedTag = e.target.textContent;

        // If the clicked tag is already active, deactivate it
        if (activeTags === clickedTag) {
            setActiveTags(null);
            setFilteredPhotos(photos);
        } else {
            // Otherwise, set the clicked tag as the active tag
            setActiveTags(clickedTag);

            const newFilteredPhotos = photos.filter((photo) => photo.tags.includes(clickedTag));

            setFilteredPhotos(newFilteredPhotos);
        }
    };

    return (
        <main className={ `${isActive ? "" : "home"}` }>
        <Nav clickHandler={onClick} isActive={isActive}/>

        <section className={ `${isActive ? "home__container" : ""}` }>
            <aside className={ `${isActive ? "home__aside" : "" }` }>
            { isActive && 
                <Tags tags={TagList} className={"tags__filter"} handleTagsClick={handleFilterClick} activeTags={activeTags} />
            }
            </aside>

            <section>
            <Hero isActive={isActive} />
            <CardList isActive={isActive} photos={filteredPhotos} />
            </section>
        </section>

        <Footer />
        </main>
    )
}

export default Home;