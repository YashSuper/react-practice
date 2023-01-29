import React from "react";
import { img_size } from "../config";
Array(10);

export default function Shimmer() {
  let shimmer = Array(10)
    .fill("")
    .map((item, index) => {
      return (
        <div className="card" key={index}>
          <div
            className="img-wrapper"
            style={{
              height: img_size.height,
              width: img_size.width,
            }}
          ></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      );
    });
  return <div className="flex shimmer">{shimmer}</div>;
}
