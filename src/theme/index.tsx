import { ConfigProvider } from "antd";
import React from "react";

import customTheme from "./theme";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
