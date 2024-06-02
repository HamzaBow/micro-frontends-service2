import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SubPage1 from "./SubPage1";
import SubPage2 from "./SubPage2";
import MainPage from "./MainPage";
import { useLocation } from "react-router-dom";

export default function App() {
  return (
    <div className="flex h-full items-stretch">
      <Router basename="/service2">
        <Sidebar />
        <Routes>
          <Route path="subpage1" element={<SubPage1 />} />
          <Route path="subpage2" element={<SubPage2 />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

function Sidebar() {
  const location = useLocation();
  return (
    <div className="w-72 h-full bg-green-500 bg-opacity-50">
      <h6>side bar</h6>
      <div className="flex flex-col mt-3">
        <Link
          to={"/"}
          className={`${location.pathname === "/" ? "bg-green-900" : ""}`}
        >
          go to Main Page
        </Link>
        <Link
          to={"/subpage1"}
          className={`${
            location.pathname === "/subpage1" ? "bg-green-900" : ""
          }`}
        >
          go to SubPage 1
        </Link>
        <Link
          to={"/subpage2"}
          className={`${
            location.pathname === "/subpage2" ? "bg-green-900" : ""
          }`}
        >
          go to SubPage 1
        </Link>
      </div>
    </div>
  );
}
