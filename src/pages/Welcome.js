import React from 'react';
import style from '../style/welcome.module.css'
import {Link} from "react-router-dom"

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
            <h1>Welcome</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    We are working hard to get clubhouse ready for everyone! while we wrap up finnish touches gradually to make sure noting breaks
                </p>
                <p>
                    We are working hard to get clubhouse ready for everyone! while we wrap up finnish touches gradually to make sure noting breaks
                </p>
                <p>
                  Pham Canh Dinh CT040110 HVKTMM
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link 
                exact to ='/invite' 
                className='primaryBtn d-flex align-items-center mb-3'        
                >
                    Get your usename
                </Link>
                <Link
                 exact to="true"
                >
                    Have an invite text ? sign in
                </Link>
            </div>
            
            
    </div>)
}
