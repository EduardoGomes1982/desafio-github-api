import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SearchProfile from "./routes/SearchProfile";
import SearchProfileStart from "./routes/SearchProfileStart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<SearchProfileStart />} />
          <Route path="/search-profile" element={<SearchProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}