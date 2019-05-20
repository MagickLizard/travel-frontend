import React, { Component } from "react";

const Spinner = (props) => {
  return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title"> {props.message}</h1>
          <progress className="progress is-large is-warning" max="100">
            Loading%
          </progress>
        </div>
      </div>
  );
};
Spinner.defaultProps = {
message: 'Loading.....'
};
export default Spinner;
