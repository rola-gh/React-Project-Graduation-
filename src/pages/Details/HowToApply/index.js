function HowToApply({job}) {
	console.log("job:" , job)
	return (

			<div>
				<h2>How To Apply</h2>
				<p>{job.how_to_apply}</p>
			</div>

	);
}

export default HowToApply;
