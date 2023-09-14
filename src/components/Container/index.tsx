import React from "react";

import Styles from "./Container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={Styles.container}>{children}</div>;
};
export default Container;
