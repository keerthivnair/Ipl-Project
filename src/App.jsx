import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";
import News from "./components/News";
function App() {
  return (
    <div className="w-screen  min-h-screen flex justify-center bg-white">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/pointsTable" element={<PointsTable />} />
          <Route path="/news" element={<News />} />
          <Route path="/matchDetail/:id" element={<MatchDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
