import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    justifyContent: "center",
  };
  return (
    <div>
      <footer
        className="bg-dark text-light py-1 text-center"
        style={footerStyle}
      >
        Copyright &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Footer;
