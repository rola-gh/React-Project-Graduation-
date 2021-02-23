import ReactMarkdown from "react-markdown";
import * as S from './style'

function HowToApply({job}) {
	console.log("job:" , job)
	return (

			<S.Apply id ='how_to_apply'>
				<S.Title>How To Apply</S.Title>
				<S.LinkApply className='mark_down'>
					<ReactMarkdown>{job.how_to_apply}</ReactMarkdown>
				</S.LinkApply>
			</S.Apply>

	);
}

export default HowToApply;
