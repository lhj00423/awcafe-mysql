import React from 'react';
import { Link } from 'react-router-dom';
import './SecondWrap.css';

const SecondWrap = () => {
    return (
        <div className='main2'>
            <div>
                <img className='toplogo2' src='images/fav_prod_txt01.png' alt=''></img>
                    <div className='ffftext'>
                        <h2>다양한 메뉴를 <br/>AWCAFE에서 즐겨보세요</h2>
                        <h5>AWCAFE만의 특별함을 경험할 수 있는 최상의 선택 음료<br/>
                            AWCAFE 커피와 완벽한 어울림을 자랑하는 푸드<br/>
                            다양한 시도와 디자인으로 가치를 더하는 상품<br/>
                            소중한 사람에게 마음을 전하는 가장 좋은 방법 AWCAFE 카드
                        </h5>
                    </div>
                <img className='threedrink' src='images/230105_newyear_pick_img.png' alt=''></img>
                <Link to ='/Menu'><div className='Detailbtn2'><p>자세히 보기</p></div></Link>
            </div>
        </div>
    );
};

export default SecondWrap;