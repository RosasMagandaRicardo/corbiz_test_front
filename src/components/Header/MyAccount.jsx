import React from 'react'
import AccountImg from "../../assets/user.svg"

import './MyAccount.css'

const MyAccount = () => {
    return (
      <div className="myAccountContainer">
        <img src={AccountImg} alt="Account" />
        <span className="accountText">{"Mi Cuenta"}</span>
      </div>
    )
}

export default MyAccount