import axios from 'axios';
import React,{ useState } from 'react';
import { API_URL } from '../../config/apiurl';
import { useNavigate } from 'react-router-dom';
import './Join.css'

const Join = () => {
    const navigate = useNavigate();
    //로그인 기본상태로 만드는 usestate
    const [ formData, setFormData ] = useState({
        aw_id:"",
        aw_password:"",
        aw_passwordch:"",
        aw_name:"",
        aw_nickname:"",
        aw_year:"",
        aw_month:"",
        aw_day:"",
        aw_yny:"",
        aw_phone:"",
        aw_sns:"",
        aw_email1:"",
        aw_email2:""
    });
    //인풋에 값을 입력하면 name 값과 value 에 맞춰서 기본상태 (setForm 상태를 변환시켜줌)
    const onChange = (e) => {
        const { name , value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //입력이 다 외었는지 체크
        if(formData.aw_id !== "" && formData.aw_password !== "" && formData.aw_passwordch !== ""){
            addMember();
        }
    }
    const addMember = () => {
        console.log("호출")
        axios.post(`${API_URL}/join`, formData)
        .then(res =>{
            alert("등록되었습니다.");
            navigate('/Login');
        })
        .catch( e =>{
            console.log("에러 발생!")
            console.log(e);
        })
    }
    return (
        <div id='Join'>
            <p id='Joinheader'>회원가입</p>
            <form onSubmit={onSubmit}>
            <div id='Jointop'>
                <div id='Joinimg'>
                    <img src='images/awcafe.png' alt=''/>
                    <p>회원정보를 입력해 주세요.</p>
                </div>
                <div id='Jointopinput'>
                    <input type='text' placeholder='아이디'
                    name='aw_id' value={formData.aw_id} onChange={onChange}/>
                </div>
                <div id='Jointopinput'>
                    <input type='password' placeholder='비밀번호'
                    name='aw_password' value={formData.aw_password} onChange={onChange}/>
                </div>
                <div id='Jointopinput'>
                    <input type='password' placeholder='비밀번호확인'
                    name='aw_passwordch' value={formData.aw_passwordch} onChange={onChange}/>
                </div>
            </div>
            <div id='Joinbotton'>
                <div id='Joinname'>
                    <p>이름<label>(필수)</label></p>
                    <input type='text' placeholder='이름'
                    name='aw_name' value={formData.aw_name} onChange={onChange}/>
                </div>
                <div id='Jointopinput' className='Joinnickname'>
                    <p>별명<label>(필수)</label></p>
                    <input type='text' placeholder='Nickname'
                    name='aw_nickname' value={formData.aw_nickname} onChange={onChange}/>
                </div>
                <div id='Jointopinput' className='Joinbd'>
                    <p>생년월일<label>(필수)</label></p>
                    <div id='bd'>
                        <select id='year' name='aw_year' onChange={onChange}>
                            <option value=''>필수 선택</option>
                            <option value='1996'>1996년</option>
                            <option value='1997'>1997년</option>
                            <option value='1998'>1998년</option>
                            <option value='1999'>1999년</option>
                            <option value='2000'>2000년</option>
                            <option value='2001'>2001년</option>
                            <option value='2002'>2002년</option>
                            <option value='2003'>2003년</option>
                            <option value='2004'>2004년</option>
                            <option value='2005'>2005년</option>
                            <option value='2006'>2006년</option>
                            <option value='2007'>2007년</option>
                        </select>
                        <select id='month' name='aw_month' onChange={onChange}>
                            <option value=''>필수 선택</option>
                            <option value='1'>1월</option>
                            <option value='2'>2월</option>
                            <option value='3'>3월</option>
                            <option value='4'>4월</option>
                            <option value='5'>5월</option>
                            <option value='6'>6월</option>
                            <option value='7'>7월</option>
                            <option value='8'>8월</option>
                            <option value='9'>9월</option>
                            <option value='10'>10월</option>
                            <option value='11'>11월</option>
                            <option value='12'>12월</option>
                        </select>
                        <select id='day'name='aw_day' onChange={onChange}>
                            <option value=''>필수 선택</option>
                            <option value='1'>1일</option>
                            <option value='2'>2일</option>
                            <option value='3'>3일</option>
                            <option value='4'>4일</option>
                            <option value='5'>5일</option>
                            <option value='6'>6일</option>
                            <option value='7'>7일</option>
                            <option value='8'>8일</option>
                            <option value='9'>9일</option>
                            <option value='10'>10일</option>
                            <option value='11'>11일</option>
                            <option value='12'>12일</option>
                        </select>
                        <select id='yny'name='aw_yny' onChange={onChange}>
                            <option value=''>필수 선택</option>
                            <option value='양'>양</option>
                            <option value='음'>음</option>
                        </select>
                    </div>
                    <span>회원가입완료후AW카드를등록하시면생일무료음료쿠폰이발생됩니다.</span>
                </div>
                <div id='Jointopinput' className='phone'>
                    <div>
                        <p>휴대폰번호<label>(필수)</label></p>
                        <input className='phoneinput' type='text' placeholder='휴대폰번호'
                        name='aw_phone' value={formData.aw_phone} onChange={onChange}/>
                    </div>
                    <input type='checkbox'
                    name='aw_sns' value='yes' onChange={onChange}/>
                    <span>SMS를통한이벤트및신규매장정보수신에동의합니다.[선택]</span>
                </div>
                <div id='Jointopinput'className='email'>
                    <div>
                        <p>메일<label>(필수)</label></p>
                        <input className='emailinput' type='text' placeholder='E-mail을 입력하세요.'
                        name='aw_email1' value={formData.aw_email1} onChange={onChange}/>
                    </div>
                    <input type='checkbox'
                    name='aw_email2' value='yes' onChange={onChange}/>
                    <span>이메일을통한이벤트및신규매장정보수신에동의합니다.[선택]</span>
                </div>
            </div>
            <button id='Joinfooter'>가입하기</button>
            </form>
        </div>

    );
};

export default Join;