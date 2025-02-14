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

  const handleTagsClick = (e) => {
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
    <main>
      <Nav clickHandler={onClick}/>

      <aside className={ `${isActive ? "app-aside" : "" }` }>
        { isActive && 
          <Tags tags={TagList} className={"tags__filter"} handleTagsClick={handleTagsClick} activeTags={activeTags} />
        }
      </aside>

      <Hero isActive={isActive} />
      
      <CardList isActive={isActive} photos={filteredPhotos}/>

      <Footer />
    </main>
  )
}

export default App;
