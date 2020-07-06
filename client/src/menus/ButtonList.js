import React from "react";
import { data } from "../data";
import IconButton from "./IconButton";
import GradientButton from "./GradientButton";

const ButtonList = () => {
  return data.map((app) => {
    if (app.colors) return <GradientButton app={app} key={app.name} />;

    return <IconButton app={app} key={app.name} />;
  });
};

export default ButtonList;
