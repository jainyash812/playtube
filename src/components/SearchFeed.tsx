import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../helper/api-info.js";
import VideoCard from "./RecommendedVideoCard";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState<any>([]);
  const history = useNavigate();
  const {searchText} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchText}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        history("/error");
      });
    //setVideos(videosData);
  }, [searchText]);

  return (
    <Box
      sx={{
        padding: "2rem 0",
        background: "#f7f6f2",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:'center',
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      {videos.map((videoDetail, idx) => {
        return <VideoCard key={`${idx}xyz`} searchCard={true} videoDetailInfo={videoDetail} />;
      })}
    </Box>
  );
};
export default SearchFeed;

