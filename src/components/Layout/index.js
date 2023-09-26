import React from "react";
import Header from "../header";
import Footer from "../Footer";
import { MainContainer } from "./styles";
import useColors from "../../hooks/useColors";

const Layout = ({ children }) => {
  const { primary, secondary } = useColors();
  return (
    <>
      <MainContainer primary={primary} secondary={secondary}>
        <Header />
        {children}
        <Footer />
      </MainContainer>
    </>
  );
};

export default Layout;
