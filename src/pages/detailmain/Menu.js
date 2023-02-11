import React from 'react';
import MenuFive from '../menu/MenuFive';
import MenuFour from '../menu/MenuFour';
import MenuSecond from '../menu/MenuSecond';
import MenuThrid from '../menu/MenuThrid';
import MenuTop from '../menu/MenuTop';


const Menu = () => {
    return (
        <div>
            <MenuTop/>
            <MenuSecond/>
            <MenuThrid/>
            <MenuFour/>
            <MenuFive/>
        </div>
    );
};

export default Menu;