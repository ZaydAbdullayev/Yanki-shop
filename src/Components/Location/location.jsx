import React, { memo } from "react";
import "./location.css";

function Location(props) {
  return <div className="location">{props.children}</div>;
}

export default memo(Location);
