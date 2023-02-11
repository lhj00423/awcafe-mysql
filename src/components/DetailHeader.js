import React from 'react';
import { Link } from 'react-router-dom';
import './DetailHeader.css'


const DetailHeader = ({isState1,isState2,isState3,isState4,isState5 }) => {
    if(isState1 || isState2 || isState3 || isState4 ||isState5){
    return (
        <div id='Detail'>
            <div id='menu'>
                        <div>
                            <h3><Link to='/Coffee'>COFFEE</Link></h3>
                            <ul>
                                <li>콜드 브루</li>
                                <li>브루드 커피</li>
                                <li>에스프레소</li>
                                <li>프라푸치노</li>
                                <li>블렌디드</li>
                                <li>AW 리프레셔</li>
                                <li>AW 피지오</li>
                                <li>티(티바나)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>FOOD</h3>
                            <ul>
                                <li>브레드</li>
                                <li>케이크</li>
                                <li>샌드위치 & 샐러드</li>
                                <li>따뜻한 푸드</li>
                                <li>과일 & 요거트</li>
                                <li>스낵 & 미니 디저트</li>
                                <li>아이스크림</li> 
                            </ul>
                        </div>
                        <div>
                            <h3>PRODUCT</h3>
                            <ul>
                                <li>머그</li>
                                <li>글라스</li>
                                <li>플라스틱 텀블러</li>
                                <li>스테인리스 텀블러</li>
                                <li>악세사리</li>
                                <li>커피용품</li>
                                <li>패키지 티(티바나)</li> 
                            </ul>
                        </div>
                        <div>
                            <h3>AW CARD</h3>
                            <ul>
                                <li>실물카드</li>
                                <li>AW GIFT 카드</li>
                            </ul>
                        </div>
                        <div>
                            <h3>AW STORY</h3>
                            <ul>
                                <li>NEW COFFEE</li>
                                <li>AW 더치커피</li>
                                <li>나만의 커피</li>
                            </ul>
                        </div>
                    </div>
        </div>
    );}
    
};

export default DetailHeader;