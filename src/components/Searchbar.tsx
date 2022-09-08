import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <input
        style={{ padding: "10px" }}
        className="search-bar"
        placeholder="Search"
      />
      <Search sx={{ cursor: "pointer" }} />
    </Box>
  );
};
export default Searchbar;
