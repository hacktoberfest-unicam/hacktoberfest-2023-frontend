import React from 'react'

import Gif from "../images/background/5TMy.gif"

export default function LoadingPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#000000", width: "100" }}>
      <img src={Gif} alt="Loading..." />
    </div>
  )
}
