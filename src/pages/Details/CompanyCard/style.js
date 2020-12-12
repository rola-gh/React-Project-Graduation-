import styled from 'styled-components'

const RandomRGB =()=>{
	const red = Math.floor(Math.random()*200);
	const green= Math.floor(Math.random()*200);
	const blue= Math.floor(Math.random()*200);

	return `rgb(${red}, ${green}, ${blue})`;
};

export const Company = styled.div`
	position: relative;
    display:flex;
    background-color:white;
    border-radius:7px;
    width : 47%;
    height: 20vh;
    margin: -32px auto 35px;
    `;
export const FirstChar = styled.div`
    background-color:${RandomRGB()};
   	width: 130px;
   	height: 20vh;
   	border-top-left-radius:7px;
   	border-bottom-left-radius:7px;
   	text-align: center;
   	padding: 20px;
   	color: white;
   	font-weight: 400;
   	font-size: 70px;
    `;
export const CompanyNameUrl = styled.div`
	margin: auto 0 ;
	padding: 35px;
    `;
export const CompanyName = styled.h2`
	font-weight: bolder;
	font-size:23px;
`;
export const CompanyUrl = styled.p`
	color: rgba(102,102,102,0.77);
	font-size: 16px;
`;
export const CompanySite = styled.button`
	cursor: pointer;
    background-color:rgba(89,100,224,0.13);
    padding:17px;
    height:7vh;
    border: none;
    outline: none;
    border-radius: 5px;
    color: rgb(89,100,224);
    font-weight: bolder;
    position: absolute;
	right: 35px;
	top: 50px;
    `;
