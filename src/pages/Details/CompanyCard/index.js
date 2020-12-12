import * as S from './style'

export default function CompanyCard({job}) {
	// console.log("job company card " , job);

	return (
		<S.Company>
			<S.FirstChar>{job.company &&job.company.charAt(0)}</S.FirstChar>
			<S.CompanyNameUrl>
				<S.CompanyName>{job.company}</S.CompanyName>
				<S.CompanyUrl>{job.company_url}</S.CompanyUrl>
			</S.CompanyNameUrl>
			<a href={job.company_url}><S.CompanySite>Company Site</S.CompanySite></a>
		</S.Company>
	);
}

