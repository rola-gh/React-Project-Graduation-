import styled from 'styled-components'

const Company = styled.div`
	position: relative;
    display:flex;
    background-color:white;
    border-radius:7px;
    width : 47%;
    height: 20vh;
    margin: -32px auto;
    `;
const FirstChar = styled.div`
    background-color:rgb(224,99,193);
   	width: 130px;
   	height: 20vh;
   	 border-top-left-radius:7px;
   	//position: absolute;
   	text-align: center;
   	padding: 20px;
   	color: white;
   	font-weight: 400;
   	font-size: 70px;
    `;
const CompanyNameUrl = styled.div`
	margin: auto 0 ;
	padding: 35px;
    `;
const CompanyName = styled.h2`
	font-weight: bolder;
	font-size:23px;
`;
const CompanyUrl = styled.p`
	color: rgba(102,102,102,0.77);
	font-size: 16px;
`;
const CompanySite = styled.button`
    background-color:rgba(89,100,224,0.13);
    padding:20px;
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

export default function CompanyCard({job}) {
	console.log("job company card " , job);
	return (
		<Company>
			<FirstChar>{job.company &&job.company.charAt(0)}</FirstChar>
			<CompanyNameUrl>
				<CompanyName>{job.company}</CompanyName>
				<CompanyUrl>{job.company_url}</CompanyUrl>
			</CompanyNameUrl>
			<CompanySite>Company Site</CompanySite>
		</Company>
	);
}

