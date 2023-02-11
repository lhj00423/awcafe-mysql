import React from 'react';
import { Link } from 'react-router-dom';
import './ThridWrap.css';

const ThridWrap = () => {
    return (
        <div>
            <div className='main3'>
                <Link to ="/LookTwo"><div className='Detailbtn3'><p>자세히 보기</p></div></Link>
            </div>
        </div>
    );
};

export default ThridWrap;