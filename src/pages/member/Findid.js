import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import './Findid.css'

const Findid = () => {
    const [idInfo,setIdInfo] = useState("");
    const [formData,setFormData] = useState({
        aw_name : "",
        aw_phone : "",
        aw_email1 : ""
    }); 
    const onChange = (e) =>{
        const { name,value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post(`${API_URL}/findid`, formData)
        .then(res=>{
           setIdInfo(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }
    return (
        <div className='Findid'>
            { idInfo ? <div> 당신의 id는 {idInfo} 입니다. <Link to ="/login"><button>로그인</button></Link> </div> :
            <>
            <form onSubmit={onSubmit}>
                <div id='Findid'>
                    <div id='Findidimg'>
                            <img src='images/awcafe.png' alt=''/>
                            <p>가입시 입력한 회원정보를 입력해 주세요.</p>
                    </div>
                    <div id='Findidinput'>
                        <input type='text' placeholder='이름' name='aw_name' value={formData.aw_name} onChange={onChange}/>
                    </div>
                    <div id='Findidinput'>
                        <input type='text' placeholder='휴대폰번호' name='aw_phone' value={formData.aw_phone} onChange={onChange}/>
                    </div>
                    <div id='Findidinput'>
                        <input type='text' placeholder='E-MAIL' name='aw_email1' value={formData.aw_email1} onChange={onChange}/>
                    </div>
                </div>
                <button id='Joinfooter'>아이디 찾기</button>
            </form>
            </>}
        </div>
    );
};

export default Findid;