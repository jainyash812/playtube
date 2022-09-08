import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      position: "sticky",
      top: 0,
      justifyContent: "space-between"
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <BedroomBabyIcon sx={{ color: "red", fontSize: "30px" }} />
    </Link>
    <SearchBar />
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <NotificationsNoneIcon sx={{ color: "black", fontSize: "25px" }} />
    </Link>
  </Stack>
);

export default Navbar;
