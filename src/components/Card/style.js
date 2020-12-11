import styled from 'styled-components'

export const CardJob = styled.div`
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2.5rem;
    align-items: center;
    /*margin-top: -1.5rem;*/
    /*margin-bottom: 1.5rem;*/
    margin: 22px;
`;

export const Charcompany = styled.div`
    color:white;
    font-weight:bold;
    width:45px;
    height: 45px;
    //background-color: RandomRGB();
    border-radius: 15px;
    text-align: center;
    padding: 12px ;
    position: absolute;
    top: -25px;
`;

export const TimeWithFullTime = styled.div`
	position: relative;
	top: -18px;
	color: gray;
	font-size: 17px;
`

export const DataTime = styled.span`
 padding-right: 20px;
`
export const FullTime = styled.span`
 padding-left: 10px;
`
export const Location = styled.p`
 color: rgb(89,100,224);
 font-weight: bold;
 margin-top: 40px;
`
