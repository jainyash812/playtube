import "./styles.css";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import SearchFeed from "./components/SearchFeed";
import VideoInfo from "./components/VideoInfo";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeFeed />} />
          <Route path="/video/:videoId" element={<VideoInfo />} />
          <Route path="/search/:searchText" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
