import React from "react";
import { Link, generatePath } from "react-router-dom";
import ROUTES from "../routes.json";

export function Home() {
  return (
    <div>
      <h1>React Player</h1>
      <Link to={generatePath(ROUTES.RANDOM_SERIES, { index: 0 })}>
        Random Series
      </Link>
    </div> 
  );
}
