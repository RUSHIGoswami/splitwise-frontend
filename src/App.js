import Modalis from "./Components/ui/Modal";
import Auth from "./Pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/modal" element={<Modalis />} />
      </Routes>
    </>
  );
}

export default App;
