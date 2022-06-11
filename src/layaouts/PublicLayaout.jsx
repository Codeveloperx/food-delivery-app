import React from "react";
import Navbar from "components/Navbar";
import BottomNavigation from "components/BottomNavigation";
import "styles/styles.css";

const PublicLayaout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <BottomNavigation />
    </div>
  );
};

export default PublicLayaout;
