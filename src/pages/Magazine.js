import React from 'react';
import './Magazine.css'

const Magazine = () => {
    return (
        <div className='magazinewrap'>
            <div className='magazine'>
                <img src='images/reserve_titC.jpg' alt=''/>
                <ul className='magazineul'>
                    <li>
                        <img src='images/icon_home.png' alt=''/>
                        <img src='images/icon_arrow.png' alt=''/>    
                    </li>
                    <li>coffee<img src='images/icon_arrow.png' alt=''/></li>
                    <li>AW 리저브<img src='images/icon_arrow.png' alt=''/></li>
                    <li>RESERVE MAGAZINE</li>
                       
                </ul>

            </div>
             <div className='box_bg'>
                <p className='all_p'>ALL</p>
            </div>
                <ul className='bigmagazi'>
                    <li id="magazine1">
                        <div><img src='images/WEB_THUM_FILE20221014130641410.jpg' alt=''/></div>
                        <p>Issue 5 | Flight to Your Reserve :<br/>
                             커피와 와인이 공유하는 취향과 이야기</p>
                    </li>
                    <li id="magazine2">
                        <div><img src='images/WEB_THUM_FILE20221014130511692.jpg' alt=''/></div>
                        <p>Issue 5 | Flight to Your Reserve : <br/>
                            와인만 알던 소믈리에, 리저브 커피의 세계에 눈</p>
                    </li>
                    <li id="magazine3">
                        <div><img src='images/WEB_THUM_FILE20221014130314866.jpg' alt=''/></div>
                        <p>Issue 5 | Flight to Your Reserve : <br/>
                             리저브 오텀, 향기로운 가을을 위하여</p>
                    </li>
                    <li id="magazine4">
                        <div><img src='images/WEB_THUM_FILE20221014130141411.jpg' alt=''/></div>
                        <p>Issue 5 | Flight to Your Reserve : <br/>
                             다르지만 때때로 닮은, 커피와 와인의 미학</p>
                    </li>
                    <li id="magazine5">
                        <div><img src='images/WEB_THUM_FILE20220125082620764.jpg' alt=''/></div>
                        <p>Issue 4 | Moments of Reserve : <br/>
                            좋은 향이 난다, 내 취향</p>
                    </li>
                    <li id="magazine6">
                        <div><img src='images/WEB_THUM_FILE20220125082417997.jpg' alt=''/></div>
                        <p>Issue 4 | Moments of Reserve : <br/>
                            리저브는 어떻게 경험을 팔게 되었나</p>
                    </li>
                    <li id="magazine7">
                        <div><img src='images/WEB_THUM_FILE20220119094033554.jpg' alt=''/></div>
                        <p>Issue 4 | Moments of Reserve : <br/>
                            우리가 사랑한 스타벅스 리저브의 커피들</p>
                    </li>
                    <li id="magazine8">
                        <div><img src='images/WEB_THUM_FILE20220119093917446.jpg' alt=''/></div>
                        <p>Issue 4 | Moments of Reserve : <br/>
                            리저브와 함께한 사람들</p>
                    </li>
                </ul>
        </div>
    );
};

export default Magazine;