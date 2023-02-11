import React from 'react';
import { API_URL } from '../../config/apiurl';


const Coldbrewitem = ({item}) => {
    console.log(item);
    return ( 
        <ul className='coffeecss'>
            <li className='coldbrewitem'>
                {item.map(item=><div key={`${item.cp_no}`}><img className='cold_brew' src={`${API_URL}/upload/${item.cp_img}`} alt=""/>
                <p className='cpname'>{item.cp_name}</p>
                <p className='cpprice'>{item.cp_price}원</p></div>)}
            </li>
        </ul>
    
    );
};

export default Coldbrewitem;