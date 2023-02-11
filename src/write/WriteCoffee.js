import axios from 'axios';
import React, { useState } from 'react';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';
import './WriteCoffee.css';


const WriteCoffee = () => {
    const [formData, setFormData] = useState({
        cp_name: "",
        cp_category: "콜드 브루",
        cp_img: "",
        cp_price: ""
    }) 
    const onChange = (e) =>{
        const { name , value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const onChangeImage= (e) => {
        const {name} = e.target;
        //폼테크 생성하기
        const imageFormData = new FormData();
        //폼태그에 데이터 추가하기
        imageFormData.append('img',e.target.files[0]);
        //전송
        axios.post(`${API_URL}/upload`,imageFormData,{
            headers:{'content-type':'multipart/formdata'}
        }).then(res=>{
            console.log(res);
            setFormData({
                ...formData,
                [name]: res.data.imageUrl
            })
            console.log(formData)
        })
        .catch(e=>console.log(e))
    }
    //폼전송
    const onSubmit = (e) => {
        //form 태그 전송 이벤트 삭제
        e.preventDefault();
        //인풋체크후 addEvnet 호출
        addAW();

    }
    const addAW = () => {
        axios.post(`${API_URL}/AW`,formData)
        .then(res=>{
            alert("등록되었습니다.");
        })
        .catch(e=>console.log(e))
    }

    return (
        <div id="Writecoffee">
            <Title title="AW COFFEE ADD" desc="메뉴를 추가해주세요 !"/>
            <form onSubmit={onSubmit}>
                <table className='defaulttablemenu'>
                    <tbody>
                        <tr className='menuname'>
                            <td >Coffee Name</td>
                            <td><input type="text" name="cp_name" 
                            value={formData.cp_name}
                            onChange={onChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                                <select name='cp_category' onChange={onChange} value={formData.cp_category} >
                                    <option value="콜드 브루">콜드 브루</option>
                                    <option value="브루드 커피">브루드 커피</option>
                                    <option value="에스프레소">에스프레소</option>
                                    <option value="프라푸치노">프라푸치노</option>
                                    <option value="블렌디드">블렌디드</option>
                                    <option value="AW 리프레셔">AW 리프레셔</option>
                                    <option value="AW 피지오">AW 피지오</option>
                                    <option value="티(티바나)">티(티바나)</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Img</td>
                            <td>
                                <input type="file" name="cp_img" 
                                onChange={onChangeImage}
                                 />
                                {formData.cp_img && <div>
                                    <img src={`${API_URL}/upload/${formData.cp_img}`}
                                    width="80px" alt=""/>
                                    </div>}
                            </td>
                        </tr>
                        <tr>
                            <td>Pirce</td>
                            <td>
                                <input type="number" min={1000} step={500} name="cp_price"
                                value={formData.cp_price} onChange={onChange}
                                /> 
                            </td>
                        </tr>
                        <tr className='buttonar'>
                            <td colSpan={2}>
                                <button className='ADD' type="submit">ADD</button>
                                <button className='RESET' type="reset">RESET</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default WriteCoffee;