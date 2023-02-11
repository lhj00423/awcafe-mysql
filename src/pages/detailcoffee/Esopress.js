import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getEso } from '../../modules/special';
import Esopressitem from './Esopressitem';

const Esopress = () => {
    const CPSData = async () => {
        const data = await axios.get(`${API_URL}/AW/esopress`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.special.eso);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getEso(CPSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="에스프레소" desc=""/>
                <Esopressitem item={data} />
            </div>
        );
};

export default Esopress;