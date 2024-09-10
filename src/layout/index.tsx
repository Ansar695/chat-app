import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayouts: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        {children}
    </>
  );
};

export default AuthLayouts;
