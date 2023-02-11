import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getFrapp } from '../../modules/special';
import Frappitem from './Frappitem';



const Frapp = () => {
    const CPData = async () => {
    const data = await axios.get(`${API_URL}/AW/frapp`);
    return data;
    }
    CPData();
    const {loading, data, error} = useSelector(state=>state.special.frapp);
    const dispatch = useDispatch();
    useEffect(()=>{ 
        dispatch(getFrapp(CPData))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없음</div>
    return (
        <div>
            <Title title="프라푸치노" desc=""/>
            <Frappitem item2={data} />
        </div>
    );
};

export default Frapp;