import React from 'react';
 
//스타일 변경
const titleStyle ={
    fontSize : "24px"
}
const titlediv = {
    padding: "20px",
    background: "#f4f4f2",
    marginBottom: "20px",
    borderRadius: "3px"
}

const Title = ({title,desc}) => {
    return (
        <div style={titleStyle}>
            <div style={titlediv}>
                <p>{title}<span>{desc}</span></p> 
            </div>
           
           
        </div>
    );
};

export default Title;