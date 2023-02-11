import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';

import { API_URL } from '../../config/apiurl';
import { getDatas } from '../../modules/special';
import Brewdcoffeewitem from './Brewdcoffeewitem';



const Brewdcoffee = () => {
    const CPData = async () => {
    const data = await axios.get(`${API_URL}/AW/brewdcoffee`);
    return data;
    }
    CPData();
    const {loading, data, error} = useSelector(state=>state.special.specials);
    const dispatch = useDispatch();
    useEffect(()=>{ 
        dispatch(getDatas(CPData))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없음</div>
    return (
        <div>
            <Title title="브루드 커피" desc=""/>
            <Brewdcoffeewitem item2={data} />
        </div>
    );
};

export default Brewdcoffee;