import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchFromAPI } from "../helper/api-info.js";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {Card,CardMedia,CardActionArea,CardContent} from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../helper/constants";

const VideoInfo = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { videoId } = useParams();
  
 useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
      .then((data) => {
          setVideoDetail(data.items[0])
          
      })
      
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
      .then((data) => {
          setVideos(data.items);
          console.log(data.items[0])
        })
  }, [videoId]);
  
  const title = !!videoDetail && videoDetail.snippet.title || 'PlayTube Title';
  const channelTitle = !!videoDetail && videoDetail.snippet.channelTitle || 'PlayTube Channel Title';
  const viewCount = !!videoDetail && videoDetail.statistics.viewCount || '2457855';
  const likeCount = !!videoDetail && videoDetail.statistics.likeCount || '234';

  return (
    <Box sx={{paddingLeft:'5rem',background: "#f7f6f2",width:"100%"}}>
      <Stack direction={{ xs: "column", md: "row" }}>
           <Box sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px", padding:"1.3rem" }}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className="react-player" controls width={850} height={450}/>
                <Typography color="black" variant="h5" fontWeight="bold" sx={{fontSize:'1.28rem',fontWeight:'100',padding:'16px 0 0'}}>
                {title}
                </Typography>
                <Stack direction="row" sx={{ color: "black",padding:'16px 0',borderBottom:'1px solid #e9e9e9' }}  >
                <Link
                    to='/' 
                    style={{marginRight:'10px',textDecoration:'none',fontSize:'1.1rem',border:'1px solid black',borderRadius:'10px',padding:'5px'}}
                    //to={`/channel/${channelId}`}
                    >
                    <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="black" >
                    {channelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "black", ml: "5px" }} />
                    </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                    <Typography variant="body1" sx={{display:'flex'}}>
                    <VisibilityOutlinedIcon sx={{marginRight:'10px'}} />
                    {parseInt(viewCount).toLocaleString()} views...
                    </Typography>
                    <Typography variant="body1" sx={{display:'flex'}}>
                    <ThumbUpOutlinedIcon sx={{marginRight:'10px'}} />
                    {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                </Stack>
                </Stack>
            </Box>
            <Box  sx={{marginTop:'1.3rem'}}>
                {!!videos && videos.map((item)=>{
                    return <>
                        <Box sx={{ maxWidth: 345,marginBottom:'10px',display:'flex',flexDirection:'column',alignItems:'center',textALign:'justify',flexWrap:'wrap' }}>
                            <CardActionArea>
                                <Link to={item.id.videoId ? `/video/${item.id.videoId}`:''} >
                                <CardMedia
                                component="img"
                                sx={{width:230,height:180}}
                                image={item.snippet.thumbnails.high.url}
                                alt={item.snippet.title}
                                />
                                </Link>
                            </CardActionArea>
                            <CardContent sx={{padding:0,position:'relative'}}>
                                <span style={{paddingTop:'5px'}}>{item.snippet.title}</span>
                            </CardContent>
                        </Box></>
                })}
            </Box>
          </Box>
      </Stack>
    </Box>
  );
};

export default VideoInfo;