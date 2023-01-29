import dataArr from "./data.json";
import Card from "./components/Card";
import React, { useEffect, useState } from "react";
import { RES_API } from "./config";
import Shimmer from "./components/Shimmer";
import Header from "./components/Header";

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [resList, setResList] = useState([]);
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoaded(false);
      let response = await fetch(RES_API);
      let data = await response.json();
      let cardData = data?.data?.cards?.[2]?.data?.data?.cards;
      setApiData(cardData);
      setResList(cardData);
      setLoaded(true);
      console.log(cardData);
    } catch (err) {
      console.log(err);
    }
  }

  function filterData(searchText) {
    let result = apiData.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(result, searchText);
    return result;
  }

  return (
    <>
      <Header />
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setResList(filterData(e.target.value));
          }}
        />
      </div>
      <div className="flex">
        {loaded ? (
          !resList.length == 0 ? (
            resList.map((resturant, index) => {
              return <Card key={index} {...resturant.data} />;
            })
          ) : (
            "No data found"
          )
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
}
