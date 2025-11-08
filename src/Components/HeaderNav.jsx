import React from "react";
import "./StyleCss/HeaderNav.css";
const HeaderNav = () => {
  return (
    <div className="header-esp">
      <div className="ESP">
        <div>ESP 10</div>
      </div>

      <div className="PSE">
        <div>
          <p>SPECIAL OFFER</p>
        </div>
        <div>
          <p>UP TO</p>
        </div>
        <div>
          <h2>50%</h2>
        </div>
        <div>
          <button className="btn-header">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
