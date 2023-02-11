import React from 'react';
import Blend from '../detailcoffee/Blend';
import Brewdcoffee from '../detailcoffee/Brewdcoffee';
import Coldbrew from '../detailcoffee/Coldbrew';
import Esopress from '../detailcoffee/Esopress';
import Fizzio from '../detailcoffee/Fizzio';
import Frapp from '../detailcoffee/Frapp';
import Refres from '../detailcoffee/Refres';
import Tea from '../detailcoffee/Tea';
import './Coffee.css'


const Coffee = () => {
    return (
        <div id='Coffee'>
            <h2>COFFEE</h2>
            <div id='select'>
                <div id='selecttitle'>
                    <p className='look'>분류보기</p>
                    
                </div>
                <div>
                    <div id='check'>
                        <button className="green">카테고리</button>
                    </div>
                    <ul className='selectmenu'>
                        <li><input type="checkbox"/><label>전체상품보기</label></li>
                        <li><input type="checkbox"/><label>콜드 브루 커피</label></li>
                        <li><input type="checkbox"/><label>브루드 커피</label></li>
                        <li><input type="checkbox"/><label>에스프레소</label></li>
                        <li><input type="checkbox"/><label>프라푸치노</label></li>
                        <li><input type="checkbox"/><label>블렌디드</label></li>
                        <li><input type="checkbox"/><label>AW 리프레셔</label></li>
                        <li><input type="checkbox"/><label>AW 피지오</label></li>
                        <li><input type="checkbox"/><label>티(티바나)</label></li> 
                    </ul>
                    <div className='menuview'>
                        <Coldbrew/>
                        <Brewdcoffee/>
                        <Esopress/>
                        <Frapp/>
                        <Blend/>
                        <Refres/>
                        <Fizzio/>
                        <Tea/>
                    </div>
                </div>

            </div>  
        </div>
    );
};

export default Coffee;