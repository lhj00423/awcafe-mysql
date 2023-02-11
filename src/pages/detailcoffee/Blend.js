import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getBlend } from '../../modules/special';
import Blenditem from './Blenditem';


const Blend = () => {
    const CPSData = async () => {
        const data = await axios.get(`${API_URL}/AW/blend`);
        console.log(data);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.special.blend);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getBlend(CPSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="블렌디드" desc=""/>
                <Blenditem item2={data}/>
            </div>
        );
};

export default Blend;