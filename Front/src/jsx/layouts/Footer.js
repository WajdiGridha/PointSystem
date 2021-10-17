import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Wajdy Gridha Developed by wajdy
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
