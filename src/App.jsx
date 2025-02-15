import { useState } from "react";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import TagList from "./data/tags.json";
import Tags from "./components/Tags/Tags";
import photos from "./data/photos.json";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [activeTags, setActiveTags] = useState(null);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

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
    <main className={ `${isActive ? "" : "app"}` }>
      <Nav clickHandler={onClick} isActive={isActive}/>

      <section className={ `${isActive ? "app__container" : ""}` }>
        <aside className={ `${isActive ? "app__aside" : "" }` }>
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

export default App;
