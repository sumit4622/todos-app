import React from 'react';

const Footer = () => {
  let footerStyle = {
    position: "fixed", // Changed to fixed for sticky footer
    bottom: 0,         // Position at the bottom
    width: "100%",
    backgroundColor: "#343a40", // Bootstrap dark background color (optional)
    color: "white",            // Bootstrap light text color (optional)
  };

  return (
    <footer className="text-center py-3" style={footerStyle}>
      Copyright &copy; MyToList.com
    </footer>
  );
};

export default Footer;