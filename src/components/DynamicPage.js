import React from "react";
import { Link } from "react-router-dom";

import Layout from "./Layout";

const DynamicPage = () => {
  return (
    <Layout>
      <h2>Dynamic Page</h2>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DynamicPage;
