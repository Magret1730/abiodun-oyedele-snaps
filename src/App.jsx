import { useState } from "react";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import TagList from "./data/tags.json";
import Tags from "./components/Tags/Tags";

function App() {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  }


  return (
    <main>
      <Nav clickHandler={onClick}/>

      <aside className={ `${isActive ? "app-aside" : "" }` }>
        { isActive && 
          <Tags tags={TagList} className={"tags__filter"}/>
        }
      </aside>

      <Hero isActive={isActive} />
      <CardList isActive={isActive} />
      <Footer />
    </main>
  )
}

export default App;
