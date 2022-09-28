import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map((actor, index) => {
      return (
        <div key={index}>
          <h2>{actor.name}</h2>
          {actor.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          })}
        </div>
      )
    })}
  </div>
  )
}


export default Actors;
