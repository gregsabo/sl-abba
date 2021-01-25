import { React } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome to the ultimate ABBA fan site.</h1>
      <p>Learn more about each of the members:</p>
      <ul>
        <li>
          <Link to="/members/agnetha">Agnetha Fältskog</Link>
        </li>
        <li>
          <Link to="/members/bjorn">Björn Ulvaeus</Link>
        </li>
        <li>
          <Link to="/members/benny">Benny Andersson</Link>
        </li>
        <li>
          <Link to="/members/annifrid">Anni-Frid Lyngstad</Link>
        </li>
      </ul>
    </>
  );
}
