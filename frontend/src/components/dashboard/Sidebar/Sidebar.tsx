import React from "react";
import SentimentGauge from "./SentimentGauge";
import RedditKeywords from "./RedditKeywords";

const Sidebar = () => {
  return (
    <aside className="flex flex-col">
      <SentimentGauge />
      <RedditKeywords />
    </aside>
  );
};

export default Sidebar;