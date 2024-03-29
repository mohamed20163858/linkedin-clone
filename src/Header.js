import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./fireBase";
function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      {/* header_left */}
      <div className="header_left">
        <img src="linkedin.png" alt="linkedin-logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>
      {/* header_right */}
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"} />
        <HeaderOption Icon={WorkIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
        <HeaderOption title={"me"} avatar onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
