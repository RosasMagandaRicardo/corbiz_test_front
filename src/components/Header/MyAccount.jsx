import React from "react";
import AccountImg from "../../assets/user.svg";

import "./MyAccount.css";

const MyAccount = () => {
  return (
    <>
      <a href="/" className="linkAccount">
        <div className="myAccountContainer">
          <img src={AccountImg} alt="Account" />
          <span className="accountText">{"Mi Cuenta"}</span>
        </div>
      </a>
    </>
  );
};

export default MyAccount;
