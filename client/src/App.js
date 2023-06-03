import "./App.css";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ViewDetails from "./views/ViewDetails";
import styles from "./styles/Container.module.css"
import PetsForm from "./components/PetsForm";
import SearchAllPets from "./components/SearchAllPets";
import UpdatePet from "./views/UpdatePet";

function App() {
  return (
    <Container fluid="md">
      <Routes>
        <Route path="/petsform" element={<PetsForm/>} />
        <Route path="/searchAllPets" element={<SearchAllPets />} />
        <Route path="/viewdetails/:id" element={<ViewDetails />} />
        <Route path="/UpdatePet/:id" element={<UpdatePet />} />
        <Route path="/" element={<SearchAllPets/>}/>
      </Routes>
    </Container>
  );
}

export default App;


