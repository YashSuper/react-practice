import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";

function ResturantLanding() {
  const [details, setDetails] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  let { resturantId } = useParams();

  useEffect(() => {
    console.log(resturantId);
    fetchDetails();
  }, []);

  //   console.log(Object.values(details?.data?.menu?.items));

  async function fetchDetails() {
    try {
      setLoaded(false);
      let response = await fetch(
        `https://www.swiggy.com/dapi/menu/v4/full?lat=26.8504593&lng=75.76277019999999&menuId=${resturantId}`
      );
      let data = await response.json();
      setDetails(data);
      setLoaded(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={`${IMG_CDN}/${details?.data?.cloudinaryImageId}`} alt="" />
      </div>
      <ul>
        {isLoaded &&
          Object.values(details?.data?.menu?.items).map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
      </ul>
    </div>
  );
}

export default ResturantLanding;
