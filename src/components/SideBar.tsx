import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Paper, Stack } from "@mui/material";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import MenuIcon from "@mui/icons-material/Menu";
import { categories } from "../helper/constants.js";

interface SideBarProps {
  categorySelected: string;
  changeSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  openStatus: boolean;
  toggleSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBar = ({
  categorySelected,
  changeSelectedCategory,
  openStatus,
  toggleSideBar,
}: SideBarProps) => {
  const history = useNavigate();
  return (
    <Paper
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "15rem",
        height: "100vh",
        padding: "0 20px",
      }}
    >
      <div className="logo-with-menuicon sidebar-logo-icon">
        <span
          onClick={() => {
            toggleSideBar(!openStatus);
          }}
          style={{ cursor: "pointer" }}
        >
          <MenuIcon />
        </span>
        <Link to="/" className="logo-with-text">
          <BedroomBabyIcon sx={{ color: "red", fontSize: "20px" }} />
          <h1 style={{ fontSize: "20px", letterSpacing: "-1px" }}>PlayTube</h1>
        </Link>
      </div>
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        {categories.map((item) => {
          return (
            <button
              key={`${item.name}`}
              onClick={() => {
                history("/");
                changeSelectedCategory(item.name);
              }}
              className={
                categorySelected === item.name
                  ? "sidebar-button active"
                  : "sidebar-button"
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-icon-name">{item.name}</span>
            </button>
          );
        })}
      </Stack>
    </Paper>
  );
};
export default SideBar;
