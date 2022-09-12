import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../helper/api-info.js";
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";
interface HomeFeedProps {
  selectedCategoryNav: string;
}
const HomeFeed = ({ selectedCategoryNav }: HomeFeedProps) => {
  const [videos, setVideos] = useState<any>([]);
  const history = useNavigate();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategoryNav}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        history("/error");
      });
    //setVideos(videosData);
  }, [selectedCategoryNav]);

  return (
    <Box
      sx={{
        paddingTop: "2rem",
        background: "#f7f6f2",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      {videos.map((videoDetail, idx) => {
        return <VideoCard key={`${idx}xyz`} videoDetailInfo={videoDetail} />;
      })}
    </Box>
  );
};
export default HomeFeed;
