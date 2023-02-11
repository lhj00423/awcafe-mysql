import React from 'react';
import { Link } from 'react-router-dom';
import './FourWrap.css';

const FourWrap = () => {
    return (
        <div className='Fourwrap'>
                <div className='Fourdisplay'>
                    <img className='reservetext' src='images/reserve_text_pc.png' alt=''></img>
                    <img className='reservevisual' src='images/reserve_visual_pc.png' alt='' ></img>
                </div>
                <Link to='/Magazine'><div className='Detailbtn4'><p>자세히 보기</p></div></Link>
        </div>
    );
};

export default FourWrap;