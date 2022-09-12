import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Tooltip, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoVideoUrl } from "../helper/constants.js";
import { styled } from "@mui/material/styles";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

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
    statistics: {
      viewCount: number;
    };
  };
  searchCard:boolean
}

const RecommendedVideoCard = ({ videoDetailInfo,searchCard }: any) => {
  //console.log('video',videoDetailInfo);
  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      margin: "0 !important",
      fontSize: "0.7rem",
      color: "black",
    },
  }));
  return (
    <>
      <Card
        sx={{minWidth:searchCard?800:445, maxWidth: searchCard?800:445, maxHeight: searchCard?250:150, display: "flex" }}
        className="uiiii"
      >
        <Link
          to={
            videoDetailInfo.id.videoId
              ? `/video/${videoDetailInfo.id.videoId}`
              : demoVideoUrl
          }
        >
          <CardMedia
            component="img"
            sx={{ width: searchCard?350:200, height: searchCard?250:150 }}
            image={videoDetailInfo.snippet.thumbnails.high.url}
            alt={videoDetailInfo.snippet.title}
          />
        </Link>
        <div style={{ padding: "1rem" }}>
          <CustomTooltip
            sx={{ border: "1px solid black", margin: 0 }}
            title={videoDetailInfo.snippet.title}
            placement="bottom"
          >
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
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
              {videoDetailInfo.snippet.title.toLowerCase()}
            </Typography>
          </CustomTooltip>
          <Typography variant="subtitle2" color="gray">
            {videoDetailInfo.snippet.channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
          <Typography variant="subtitle2" color="gray">
            {Math.floor(Math.random() * 10000)} views
          </Typography>
        </div>
      </Card>
    </>
  );
};
export default RecommendedVideoCard;
