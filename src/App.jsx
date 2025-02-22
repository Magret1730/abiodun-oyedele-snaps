import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Photo from "./pages/Photo/Photo";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/photo/:id" element={<Photo />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
