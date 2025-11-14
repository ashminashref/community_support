import React from "react";
import "./BottomNav.css";

// MUI
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import AppsIcon from "@mui/icons-material/Apps";
import EmergencyIcon from "@mui/icons-material/Emergency";

export default function BottomNav() {
  return (
    <div className="fixed-bottom">
     
      <div className="box d-flex justify-content-between align-items-center py-4 px-4">
        <HomeFilledIcon />
        <AppsIcon />
        <EmergencyIcon />
      </div>
    </div>
  );
}