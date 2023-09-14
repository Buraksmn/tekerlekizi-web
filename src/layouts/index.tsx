import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Col, Row } from "antd";
import Container from "../components/Container";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
