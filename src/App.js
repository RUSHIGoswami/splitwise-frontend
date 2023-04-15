import Auth from "./Pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
