import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='Footermain'>
            <div id='footer'>
                <ul id='top'>
                    <li>
                        <p className='first'>COMPANY</p>
                        <p>한눈에 보기</p>
                        <p>AW CAFE 사명</p>
                        <p>AW CAFE  소개</p>
                        <p>국내 뉴스룸</p>
                        <p>세계의 AW CAFE</p>
                        <p>글로벌 뉴스룸</p>
                    </li>
                    <li>
                        <p className='first'>CORPORATE SALES</p>
                        <p>단체 및 기업 구매 안내</p>
                        <p>단체 주문 배달 안내</p>
                    </li>
                    <li>
                        <p className='first'>PARTNERSHIP</p>
                        <p>신규 입점 제의</p>
                        <p>협력 고객사 등록신청</p>
                    </li>
                    <li>
                        <p className='first'>ONLINE COMMUNITY</p>
                        <p>페이스북</p>
                        <p>트위터</p>
                        <p>유튜브</p>
                        <p>인스타그램</p>
                    </li>
                    <li>
                        <p className='first'>RECRUIT</p>
                        <p>채용 소개</p>
                        <p>채용 지원하기</p>
                    </li>
                </ul>
                <ul id='bottom'>
                    <li id='one'>
                        <span>개인정보처리방침</span>
                        <span>영상정보처리기기 운영관리 방침</span>
                        <span>홈페이지 이용약관</span>
                        <span>위치정보 이용약관</span>
                        <span>AW CARD 이용약관</span>
                        <span>비회원 이용약관</span>
                        <span>My DT Pass 서비스 이용약관</span>
                        <span>윤리경영 핫라인</span>
                    </li>
                    <li className='flex'>
                        <p>찾아오시는길</p>
                        <p>신규입점제의</p>
                        <p>사이트 맵</p>
                    </li>
                    <li className='three'>
                        <span>사업자등록번호 : 201-81-21515</span>
                        <span>주식회사 AW컴퍼니 대표이사 : LHJ</span>
                        <span>TEL : 1522-3232</span>
                        <span>개인정보 책임자 : JHS</span>
                    </li>
                    <li className='four'>ⓒ 2023 AW CAFE Company. All Rights Reserved.</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;