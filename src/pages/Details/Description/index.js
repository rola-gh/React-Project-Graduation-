import moment from "moment-timezone";
import {Button} from "antd";

import styled from 'styled-components'

 const Descr = styled.div`
    display:flex;
    background-color:white;
    border-radius:10px;
    `;
 const TimeWithFullTime = styled.div`
    background-color:rgb(224,43,49);
    padding:20px;
    height:18vh;
    `;
 const DataTime = styled.div`
    background-color:rgb(89,100,224);
    padding:20px;
    height:18vh;
    `;
 const FullTime = styled.button`
    background-color:rgb(89,100,224);
    padding:20px;
    height:18vh;
    `;

function Description({job}) {
	return (
		<Descr>
			<div>
			<TimeWithFullTime>
				{/*<DataTime>{ moment(job.created_at).fromNow()}</DataTime>*/}
				<span>&#8226;</span>
				<FullTime>{job.type}</FullTime>
				<h2>{job.company}</h2>
				<p>{job.location}</p>
			</TimeWithFullTime>
			<Button>Apply Now</Button>
			</div>
			<div>
				<p>{job.description}</p>
			</div>
		</Descr>
	);
}

export default Description;
