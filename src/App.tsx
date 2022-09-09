import React,{useState} from 'react';
import "./styles.css";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import SearchFeed from "./components/SearchFeed";
import VideoInfo from "./components/VideoInfo";
import Navbar from "./components/Navbar";
export default function App() {
  const [selectedCategory,setSelectedCategory]=useState('New');
  return (
    <BrowserRouter>
      <Box>
        <Navbar 
          selectedCategoryNav={selectedCategory} 
          setSelectedCategoryNav={(value)=>setSelectedCategory(value)} 
        />
        <Routes>
          <Route path="/" element={<HomeFeed selectedCategoryNav={selectedCategory} />} />
          <Route path="/video/:videoId" element={<VideoInfo />} />
          <Route path="/search/:searchText" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
