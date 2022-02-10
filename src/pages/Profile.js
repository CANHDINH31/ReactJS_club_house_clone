import React from 'react';
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import { Link } from 'react-router-dom'
import { BsAt, BsUpload,BsPlus } from 'react-icons/bs'
import { AiOutlineSetting, AiOutlineTwitter,AiOutlineInstagram } from 'react-icons/ai'


function Profile() {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-right mb-8`}>
                        <Link to='/home'>
                            <img
                                src="/images/arrow.png"
                                alt=""
                                className={exploreStyle.arrow_icon} />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>

                </div>
                <img
                    src="/images/user-img1.png"
                    alt=""
                    className={style.profile_image}
                />
                <h4>Canh Dinh</h4>
                <p>@canhdinhpro</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span>followers
                    </p>
                    <p>
                        <span>51</span>following
                    </p>
                </div>
                <button>Add a bio</button>
                <div className='mb-4'>
                    <button className='mb-0'>
                        <AiOutlineTwitter /> Add Twitter
                    </button>
                    <button className='mb-0'>
                        <AiOutlineInstagram /> Add Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/user-img1.png" alt="" />
                    <div>
                        <p>Joined 02-07-2022</p>
                        <p>Nominated by <span>Canh Dinh</span></p>
                    </div>
                </div>
                <p>Member of</p>
                <button className={style.addMemberBtn}>
                    <BsPlus />
                </button>
            </div>
        </>
    )
}

export default Profile;
