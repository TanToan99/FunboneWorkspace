import React from "react";
import { Route } from "react-router-dom";
import { NavigationBar } from "..";

const HomePage = React.lazy(() => import("pages/Home"));
const Workspace = React.lazy(() => import("pages/Workspace/index"));

const CommonContainer = () => {
  return (
    <div>
      <NavigationBar />
      <Route path="/home" component={HomePage} />
      <Route path="/workspace" component={Workspace} />
    </div>
  );
};

export default CommonContainer;
