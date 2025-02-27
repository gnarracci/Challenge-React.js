import React from "react";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="container">
      <div className="jumbotron mt-5 mx-auto">
        <h1 className="display-3">Hello Students!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Link
            className="btn btn-primary btn-lg"
            to="/signup"
            role="button"
          >
            Let's get Started!
          </Link>
        </p>
      </div>
    </div>
  );
}
