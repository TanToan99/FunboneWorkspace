import React from "react";
import { Route } from "react-router-dom";
import { NavigationBar } from "..";

const HomePage = React.lazy(() => import("pages/Home"));

const CommonContainer = () => {
  return (
    <div>
      <NavigationBar />
      <Route path="/home" component={HomePage} />
    </div>
  );
};

export default CommonContainer;
