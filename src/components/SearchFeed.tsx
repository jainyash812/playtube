import React, { useState, useEffect } from "react";
import { Box ,CircularProgress} from "@mui/material";
import { fetchFromAPI } from "../helper/api-info.js";
import RecommendedVideoCard from "./RecommendedVideoCard";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState<any>([]);
  const history = useNavigate();
  const {searchText} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchText}`)
      .then((data) => {
        setVideos(data.items.splice(1));
      })
      .catch((error) => {
        history("/error");
      });
    //setVideos(videosData);
  }, [searchText]);
  
  if(videos.length ===0 ){
     return <Box 
              sx={{color:'red',display: 'flex',width: '100vw',
                    height: '91vh',
                    justifyContent: 'center',
                    alignItems: 'center',background: "#f7f6f2"}}>
               <CircularProgress sx={{height:'100vh',width:'100vw'}} />
            </Box>
  }
  
  return (
    <>
    <div className="row" style={{display:'flex',flexDirection:'column',position:'fixed',top: '50%'}}>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
    </div>
    <Box
    className='search-feed-container'
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
        return <RecommendedVideoCard key={`${idx}xyz`} searchCard={true} videoDetailInfo={videoDetail} />;
      })}
    </Box>
    <div className="row" style={{display:'flex',flexDirection:'column',position:'fixed',top: '35%',right:0}}>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
    </div>
    </>
  );
};
export default SearchFeed;

