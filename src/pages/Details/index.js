import CompanyCard from './CompanyCard'
import Description from './Description'
import HowToApply from './HowToApply'
import axios from 'axios'
import {useState , useEffect} from 'react';

function Details(props) {
	const [job, setJob] = useState([]);

	useEffect(() => {
		const id = props.match.params.id;
		axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`, {
			params: {markdown: true}
		}).then((res) => {
			console.log("data" ,res.data)
			setJob(res.data);

		}).catch(e => {
			console.log(e)
		})

	}, []);


	// console.log("props",props+.match.params.id)
	return (

		<div>
			<CompanyCard job={job}/>
			{/*<Description job={job}/>*/}
			{/*<HowToApply job={job}/>*/}
		</div>

	);

}
export default Details;
