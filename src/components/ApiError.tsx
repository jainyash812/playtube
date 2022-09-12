import React from 'react';
import {Box} from '@mui/material';
const APIError= ()=>{
    return<Box sx={{
        paddingTop: "2rem",
        background: "#f7f6f2",
        height: "87vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:'flex-start',
        flexWrap: "wrap",
        fontSize:'1.5rem',
        fontWeight:'bold'
      }}>SORRY Currently the API Server is not able to serve requests. </Box>
}
export default APIError;