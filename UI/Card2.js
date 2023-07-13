// Card.js

import React from "react";
import PropTypes from "prop-types";
import "./Card2.css";

const Card2 = ({ heading, count }) => {
  return (
    <div className="card">
      <h3 className="card-heading">{heading}</h3>
      <p className="card-count">{count}</p>
    </div>
  );
};

Card2.propTypes = {
  heading: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Card2;
