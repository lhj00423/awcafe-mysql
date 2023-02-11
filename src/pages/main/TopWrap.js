import React from 'react';
import { Link } from 'react-router-dom';
import './TopWrap.css';

const TopWrap = () => {
    return (
        <div className='main1'>
            <div className='mainTop'>
                <div className='toplogo1'><img className='' src='images/2023_newyear_top_logo.png' alt=''></img></div>
                    <div className='Topdrink'>
                        <img className='topdrink1' src='images/2023_newyear_top_drink_1_1.png' alt='' ></img>
                        <img className='topdrink2' src='images/2023_newyear_top_drink_2_1.png' alt=''></img>
                        <img className='topdrink3' src='images/2023_newyear_top_drink_3_1.png' alt=''></img>  
                    </div>
            </div>
            <Link to ='/LookOne'><div className='Detailbtn1'><p>자세히 보기</p></div></Link>
        </div>
    );
};

export default TopWrap;