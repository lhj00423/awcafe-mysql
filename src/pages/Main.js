import React from 'react';
import FourWrap from './main/FourWrap';
import SecondWrap from './main/SecondWrap';
import ThridWrap from './main/ThridWrap';
import TopWrap from './main/TopWrap';


const Main = () => {
    return (
        <div>
            <TopWrap/>
            <SecondWrap/>
            <ThridWrap/>
            <FourWrap/>
        </div>
    );
};

export default Main;