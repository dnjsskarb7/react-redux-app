import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="item">
      <Link to="/surveys/new">
        <button className="ui right floated button">
          <i className="address book icon"></i>
          Add
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
