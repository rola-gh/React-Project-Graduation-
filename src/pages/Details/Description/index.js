import moment from "moment-timezone";
import ReactMarkdown from 'react-markdown'

import {Button} from "antd";
import * as S from './style'

const buttonApply={
	padding:15,
	textAlign:'center',
	border: 'none',
	outline: 'none',
	borderRadius: 5,
	color:'white',
	fontWeight: 'bolder',
	position: 'absolute',
	right: -150,
	top: 50,
	height:50,
	width:120
}

function Description({job}) {
	return (
		 <S.Wrapper>
			<S.SectionOne>
				<S.TimeWithFullTime>
					<S.DataTime>{ moment(job.created_at).fromNow()}</S.DataTime>
					<span>&#8226;</span>
					<S.FullTime>{job.type}</S.FullTime>
				</S.TimeWithFullTime>
				<S.Title>{job.title}</S.Title>
				<S.Location>{job.location}</S.Location>
				<Button type='primary' style={buttonApply}>Apply Now</Button>
			</S.SectionOne>
			<S.DescriptionJob>
				<ReactMarkdown>{job.description}</ReactMarkdown>
			</S.DescriptionJob>
		</S.Wrapper>
	);
}

export default Description;
