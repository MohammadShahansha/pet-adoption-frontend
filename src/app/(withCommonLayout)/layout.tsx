import FootePage from "@/components/Shared/Footer/Footer";
import NavbarPage from "@/components/Shared/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarPage />
      {children}
      <FootePage />
    </>
  );
};

export default CommonLayout;
