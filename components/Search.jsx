import React, { useState } from "react";
import { IMG_CDN, RES_API } from "../config";

export default Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="search-container">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
