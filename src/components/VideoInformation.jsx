import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack,CircularProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchFromAPI } from "../helper/api-info.js";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
//import { Card, CardMedia, CardActionArea, CardContent } from "@mui/material";
import RecommendedVideoCard from "./RecommendedVideoCard";
import { useNavigate } from "react-router-dom";
//import {videoData} from '../helper/constants.js';

const VideoInformation = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { videoId } = useParams();
  const [videoLoading,setVideoLoading]=useState(false);
  const [rvideoLoading,setRVideoLoading]=useState(false);
  const history = useNavigate();

  useEffect(() => {
    setVideoLoading(true);
    setRVideoLoading(true);
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
      .then((data) => {
          setTimeout(()=>{
              setVideoLoading(false);
          },2000);
          setVideoDetail(data.items[0]);
      }).catch((error) => {
        history("/error");
      });

      fetchFromAPI(`search?part=snippet,statistics&relatedToVideoId=${videoId}&type=video`)
      .then((data) => {
          setTimeout(()=>{
              setRVideoLoading(false);
          },2000);
          setVideos(data.items);
        }).catch((error) => {
        history("/error");
      });
    
    // setVideos(videoData);
    // setVideoDetail(videoData[0]);
    
  }, [videoId]);

  const title = !!videoDetail ? videoDetail.snippet.title : "PlayTube Title";
  const channelTitle = !!videoDetail ? videoDetail.snippet.channelTitle : "PlayTube Channel Title";
  const viewCount = !!videoDetail ? videoDetail.statistics.viewCount : "2457855";
  const likeCount = !!videoDetail ? videoDetail.statistics.likeCount : "234";

  return (
    <Box sx={{ background: "#f7f6f2", width: "100%" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center"}}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          className='video-container'
        >
            {(videoLoading && rvideoLoading) ? <Box 
                    sx={{color:'red',display: 'flex',width: '100vw',
                    height: '91vh',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                        <CircularProgress sx={{height:'100vh',width:'100vw'}} />
                        </Box>:<>
                        <Box
                        sx={{
                        // width: "100%",
                        // position: "sticky",
                        // top: "86px",
                        padding: "1.3rem",
                        }}
                >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls
              width={1000}
              height={510}
              fallback={ <CircularProgress sx={{height:'100vh',width:'100vw'}} />}
            />
            <Typography
              color="black"
              variant="h5"
              fontWeight="bold"
              sx={{
                fontSize: "1.28rem",
                fontWeight: "100",
                padding: "16px 0 0",
              }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              sx={{
                color: "black",
                padding: "16px 0",
                borderBottom: "1px solid #e9e9e9",
              }}
            >
              <Link
                to="/"
                style={{
                  marginRight: "10px",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  border: "1px solid black",
                  borderRadius: "10px",
                  padding: "5px",
                }}
                //to={`/channel/${channelId}`}
              >
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="black"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "black", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ display: "flex",alignItems:'center'}}>
                  <VisibilityOutlinedIcon sx={{ marginRight: "10px" }} className='visible-icon' />
                  {parseInt(viewCount).toLocaleString() ||'2345'}
                </Typography>
                <Typography variant="body1" sx={{ display: "flex",alignItems:'center'  }}>
                  <ThumbUpOutlinedIcon sx={{ marginRight: "10px" }} className='thumbs-up-icon' />
                  {parseInt(likeCount).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          
          <Box sx={{ marginTop: "1.3rem" }}>
            {!!videos &&
              videos.map((item, idx) => {
                return (
                  <>
                    <Box
                      key={`item${idx}`}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexWrap: "wrap",
                        marginBottom: "1rem",
                      }}
                    >
                      <RecommendedVideoCard searchCard={false} videoDetailInfo={item} />
                    </Box>
                  </>
                );
              })}
          </Box>
          </>}

          {/* <Box sx={{ marginTop: "1.3rem" }}>
            {!!videos &&
              videos.map((item, idx) => {
                return (
                  <>
                    <Box
                      key={`item${idx}`}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexWrap: "wrap",
                        marginBottom: "1rem",
                      }}
                    >
                      <RecommendedVideoCard searchCard={false} videoDetailInfo={item} />
                    </Box>
                  </>
                );
              })}
          </Box> */}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoInformation;
