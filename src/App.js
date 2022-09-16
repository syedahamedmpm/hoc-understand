import "./App.css";
import Syed from "./Syed";
import Ahamed from "./Ahamed";
import { Routes, Route, Link } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Syed</Link>
          <Link to="ahamed">Ahamed</Link>
          <Link to="pageone/1">Page One</Link>
          <Link to="pagetwo">Page Two</Link>
        </nav>
        <Routes>
        <Route path="/pagetwo" element={<PageTwo />} />
        {/* useParams Examble */}
        <Route path="/pageone/:id" element={<PageOne />} />
        {/* useParams Examble */}
        <Route path="/ahamed" element={<Ahamed />} />
        <Route path="/" element={<Syed />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
