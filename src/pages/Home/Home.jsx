import { useEffect, useState } from "react";
import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import Tags from "../../components/Tags/Tags";
import axios from "axios";

function Home() {
    const [photos, setPhotos] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [activeTags, setActiveTags] = useState(null);
    const [filteredPhotos, setFilteredPhotos] = useState([]);
    const [tags, setTags] = useState(null);

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetchPhotos();
        fetchTags();
    }, []);

    async function fetchPhotos() {
        try {
            const {data} = await axios.get(`${BASE_URL}/photos`);

            setPhotos(data);
            setFilteredPhotos(data);
        } catch (error) {
            console.log("Error in fetchPhotos", error);
        }
    }

    if (!photos) {
        return <div>loading...</div>
    }

    async function fetchTags() {
        try {
            const {data} = await axios.get(`${BASE_URL}/tags`);
            setTags(data);

        } catch (error) {
            console.error("Error fetching tags", error);
        }
    }

    if (!tags) {
        return <div>loading...</div>
    }

    const onClick = () => {
        setIsActive(!isActive);
    }

    const handleFilterClick = (e) => {
        const clickedTag = e.target.textContent;

        if (activeTags === clickedTag) {
            setActiveTags(null);
            setFilteredPhotos(photos);
        } else {
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
                        <Tags tags={tags} className={"tags__filter"} handleTagsClick={handleFilterClick} activeTags={activeTags} />
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