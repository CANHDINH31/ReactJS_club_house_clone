import React from 'react';
import style from '../style/phoneConfirm.module.css'
import {Link} from 'react-router-dom'

function CodeConfirm() {
  return (
  <div className={style.phoneComfirmContainer}>
      <Link exact to = '/get_username' className={style.backBtn} >
          <img src="/images/arrow.png" />
      </Link>
      <div className='text-center'>
            <h1 style={{width:'100%', maxWidth:'200px',marginBottom:'1em'}}>
                Enter the code we just texted you
            </h1>
            <input 
            type="text"
            style={{
                width:'100%',
                border:'none',
                outline: 'none',
                textAlign:'center',

            }}
            />
            <p className='mt-2'>
                Didn't receive it ? <span>Tap top resend</span> 
            </p>
            <Link exact to = "/allow_notification" 
            className='primaryBtn d-flex align-items-center'
            >Next <img src="/images/nextArrow.svg" alt="" />
            </Link>
      </div>
  </div>
  );
}

export default CodeConfirm;
