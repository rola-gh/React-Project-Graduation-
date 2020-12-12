import styled from 'styled-components'
import ReactMarkdown from "react-markdown";

const Apply = styled.div`
    background-color:rgb(89,100,224);;
    position: relative;
    border-radius:7px;
    width : 47%;
    margin: 5px auto 35px;
    padding: 35px 25px 35px;
    `;
const Title = styled.h2`
	color: white;
    font-size: 18px;
    font-weight: bold;
`
const LinkApply = styled.p`
	color: white;
	font-size: 17px;
`

function HowToApply({job}) {
	console.log("job:" , job)
	return (

			<Apply>
				<Title>How To Apply</Title>
				<LinkApply>
					<ReactMarkdown>{job.how_to_apply}</ReactMarkdown>
				</LinkApply>
			</Apply>

	);
}

export default HowToApply;
