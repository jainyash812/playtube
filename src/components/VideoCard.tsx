import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
} from "@mui/material";
import { demoVideoUrl } from "../helper/constants.js";
interface VideoCardProps {
  videoDetailInfo: {
    kind: string;
    id: {
      kind: string;
      videoId: string;
    };
    snippet: {
      publishedAt: "2022-09-10T02:05:54Z";
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      liveBroadcastContent: string;
      publishTime: "2022-09-10T02:05:54Z";
    };
  };
}

const VideoCard = ({ videoDetailInfo }: VideoCardProps) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Link
            to={
              videoDetailInfo.id.videoId
                ? `/video/${videoDetailInfo.id.videoId}`
                : demoVideoUrl
            }
          >
            <CardMedia
              component="img"
              sx={{ width: 350, height: 180 }}
              image={videoDetailInfo.snippet.thumbnails.high.url}
              alt={videoDetailInfo.snippet.title}
            />
          </Link>
          <CardContent>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                textTransform: "capitalize",
                lineHeight: "1.3rem",
                marginBottom: "7px",
                cursor: "pointer",
              }}
              variant="subtitle1"
              fontWeight="bold"
              color="black"
            >
              {videoDetailInfo.snippet.title}
            </Typography>
            <Typography variant="subtitle2" color="gray">
              {videoDetailInfo.snippet.channelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default VideoCard;
