import React from 'react';

interface VideoCardProps{
    videoDetailInfo:{snippet:{
        description:string
    }}
}
const VideoCard = (props:VideoCardProps) =>{
    return <>{props.videoDetailInfo.snippet.description}</>
}
export default VideoCard
