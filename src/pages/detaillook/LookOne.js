import React from 'react';
import './LookOne.css';

const LookOne = () => {
    return (
        <div className='lookonewrap'>
            <div className='looknoe'>
                <img className='eventimg' src='images/campaign_tit_20210218.jpg' alt=''/>
                <ul className='lookoneul'>
                    <li>
                        <img src='images/icon_home.png' alt=''/>
                        <img src='images/icon_arrow.png' alt=''/>    
                    </li>
                    <li>WHAT'S NEW<img src='images/icon_arrow.png' alt=''/></li>
                    <li>이벤트<img src='images/icon_arrow.png' alt=''/></li>
                </ul>
            </div>
                <div className='newyear'>
                    <ul className='newyearul' >
                        <li>
                            <h3>뉴이어 프로모션 <span>2023-01-01 ~ 2023-02-14</span></h3>
                        </li>
                        <li>
                            <img src="images/icon_cpv_f.png" alt=''/>
                        </li>
                    </ul>
                </div>
                <div id="post">
                    <img src="images/wn_new_year_221220_web_1.jpg" alt=""/>
                    <img src="images/wn_new_year_221220_web_2.jpg" alt=""/>
                </div>
                <button id="list">목록</button>
        </div>
    );
};

export default LookOne;