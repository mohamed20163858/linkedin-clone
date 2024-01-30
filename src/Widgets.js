import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon className="fiber" />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Mohamed Saleh is back",
        "Top news - above 20 courses certificates added"
      )}
      {newsArticle(
        "Mohamed Saleh is back",
        "Top news - above 20 courses certificates added"
      )}
      {newsArticle(
        "Mohamed Saleh is back",
        "Top news - above 20 courses certificates added"
      )}
      {newsArticle(
        "Mohamed Saleh is back",
        "Top news - above 20 courses certificates added"
      )}
      {newsArticle(
        "Mohamed Saleh is back",
        "Top news - above 20 courses certificates added"
      )}
    </div>
  );
}

export default Widgets;
