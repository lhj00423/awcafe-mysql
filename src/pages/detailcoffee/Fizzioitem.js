import React from 'react';
import { API_URL } from '../../config/apiurl';

const Fizzioitem = ({item2}) => {
    console.log(item2);
    return (
        <ul className='coffeecss2'>
            <li className='coldbrewitem'>
                {item2.map(item=><div key={`${item.cp_no}`}><img src={`${API_URL}/upload/${item.cp_img}`} alt=""/>
                <p>{item.cp_name}</p>
                <p>{item.cp_price}</p></div>)}
            </li>
        </ul>
    );
};

export default Fizzioitem;