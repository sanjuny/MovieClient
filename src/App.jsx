import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePages from "./pages/moviePages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviePages />} />
      </Routes>
    </Router>
  );
}

export default App;
