import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMG_CDN, RES_API, img_size } from "../config";

export default function Card({
  name,
  id,
  cuisines,
  locality,
  cloudinaryImageId,
}) {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <Link className="card" to={`/resturant/${id}`}>
      <div>
        <div
          className="img-wrapper"
          style={{
            height: img_size.height,
            width: img_size.width,
          }}
        >
          <img
            className={`card-img${isLoaded ? " loaded" : ""}`}
            src={`${IMG_CDN}/${cloudinaryImageId}`}
            alt={name}
            height={img_size.height}
            width={img_size.width}
            onLoad={() => {
              setLoaded(true);
            }}
          />
        </div>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{locality}</h4>
      </div>
    </Link>
  );
}
