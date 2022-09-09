import React ,{useState,useEffect} from 'react';
import { Box } from "@mui/material";
import {fetchFromAPI} from '../helper/api-info.js'
import VideoCard from './VideoCard'

interface HomeFeedProps{
    selectedCategoryNav:string;
}
const HomeFeed = ({selectedCategoryNav}:HomeFeedProps) => {
    const [videos,setVideos]= useState([])
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectedCategoryNav}`)
        .then((data)=>{
            setVideos(data.items);
            console.log(data.items);
        })
    },[selectedCategoryNav])
  return <Box sx={{ background: "#f7f6f2", height: "100vh" }}>
            {
                videos.map((videoDetail)=>{
                    return <VideoCard videoDetailInfo={videoDetail} />
                })
            }
      </Box>;
};
export default HomeFeed;
