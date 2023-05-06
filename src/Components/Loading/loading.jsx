import React, { memo } from "react";
import "./loading.css";

const Loading = ({ status = false }) => {
  return (
    <div className={status ? "loading_box" : "close_loading"}>
      <div class="spinner">
        <p>YANKI</p>
      </div>
    </div>
  );
};

export default memo(Loading);
