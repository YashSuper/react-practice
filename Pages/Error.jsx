import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <h1>
      Page not found <Link to="/">Go to home</Link>
    </h1>
  );
}

export default Error;
