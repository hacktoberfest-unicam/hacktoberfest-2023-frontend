import React from "react";

import Gif from "../images/background/5TMy.gif";

export default function LoadingPage() {
  return (
    <div
      style={{ position: "fixed", zIndex: 9999, left: 0, top: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", backgroundColor: "black" }}
    >
      <img src={Gif} alt="Loading..." />
    </div>
  );
}
