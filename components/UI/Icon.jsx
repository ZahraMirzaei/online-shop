import React from "react";
import * as FontAwesome from "react-icons/fa";
import * as GithubOcticons from "react-icons/go";

const Icon = (props) => {
  const { iconName, className } = props;
  const icon = React.createElement(GithubOcticons[iconName]);
  return <div className={className}>{icon}</div>;
};

export default Icon;
