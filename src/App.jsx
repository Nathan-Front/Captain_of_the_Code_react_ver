import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Nav from "./components/navigation/nav.jsx";
import Foot from "./components/footer/foot.jsx";
import Voyage from "./components/voyage/voyage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Voyage />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;
