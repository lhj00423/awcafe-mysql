import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';

import { API_URL } from '../../config/apiurl';
import { getDatass } from '../../modules/special';
import Coldbrewitem from './Coldbrewitem';



const Coldbrew = () => {
    const CPSData = async () => {
    const data = await axios.get(`${API_URL}/AW/coldbrew`);
    return data;
    }
    const {loading, data, error} = useSelector(state=>state.special.specialss);
    const dispatch = useDispatch();
    useEffect(()=>{ 
        dispatch(getDatass(CPSData))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없음</div>
    return (
        <div>
            <Title title="콜드 브루" desc=""/>
            <Coldbrewitem item={data} />
        </div>
    );
};

export default Coldbrew;