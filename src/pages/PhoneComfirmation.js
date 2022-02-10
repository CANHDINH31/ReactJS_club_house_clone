import React, {useState} from 'react';
import style from "../style/phoneConfirm.module.css"
import PhoneInput from 'react-phone-number-input';

import {Link } from "react-router-dom"

function PhoneComfirmation() {
    const [value,setValue] = useState();
  return (
  <div className={style.phoneComfirmContainer}>
      <Link exact to="/" className={style.backBtn}>
          <img src="/images/arrow.png" alt="" />
      </Link>
        <h1>Enter your phone</h1>
        <PhoneInput 
        international 
        defaultCountry="VN"
        value = {value}
        onChange={setValue}
        />
        <p>Bt entering your number, you're agrreting to our
            <span>
                Teres of Service and Privacy Policy. 
            </span>
            Thanks
        </p>
        <Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center">
            Next 
        </Link>
  </div>
  );
}

export default PhoneComfirmation;
