import "./App.css";
import { Header } from "./Componants/Header";
import { Footer } from "./Componants/Footer";
import Group from "./Componants/Group";
import { AlbumByID } from "./Componants/AlbumByID";
import { Route, Routes } from "react-router-dom";
import { Form } from "./Componants/Form";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<Group />}></Route>
        <Route path="/details/:id" element={<AlbumByID />}></Route>
        <Route path="/Form" element={<Form />}></Route>
      </Routes>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
