import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  const [searchText,setSearchText] = useState<any>('');
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center",margin:'5px' }}>
      <input
        onChange={(e)=>{setSearchText(e.target.value)}}
        style={{ padding: "10px", border:"1px solid #e0e0e0",width:'30rem',minWidth:'10rem' }}
        className="search-bar"
        placeholder="Search"
      />
      <Link to={`/search/${searchText}`}>
      <Search 
        sx={{background:"#f6f6f6",
           color:'#030303', 
           cursor: "pointer",
           border:"1px solid #e0e0e0",
           padding:"6px 10px" }} 
      />
      </Link>
    </Box>
  );
};
export default Searchbar;
