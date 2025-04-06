import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../features/Home/HomePage";
import PokePage from "../features/PokePage/PokePage";
import ObjectsPage from "../features/Objects/ObjectsPage";
import Layout from "../components/Layout/Layout";


const Router = () => {
  return (
    <BrowserRouter basename="/pokeProject">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/pokedex" element={<PokePage />} />
          <Route path="/objects" element={<ObjectsPage />} />
        </Route>
    </Routes>
    </BrowserRouter >
  )
}

export default Router