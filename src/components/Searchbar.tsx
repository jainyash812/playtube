import React from 'react';
import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center",margin:'5px' }}>
      <input
        style={{ padding: "10px", border:"1px solid #e0e0e0",width:'26rem',minWidth:'10rem' }}
        className="search-bar"
        placeholder="Search"
      />
      <Search 
        sx={{background:"#f6f6f6",
           color:'#030303', 
           cursor: "pointer",
           border:"1px solid #e0e0e0",
           padding:"6px 10px" }} 
      />
    </Box>
  );
};
export default Searchbar;
