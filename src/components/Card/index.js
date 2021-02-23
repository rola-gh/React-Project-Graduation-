import {useState} from 'react'
import { Alert   } from 'antd';
import useFetch from './useFetch'
import Job from './Job'
import CardLoading from '../CardLoading'
import * as S from './style'
import Search from "../Search";

const onClose = (e) => {
    console.log(e, 'I was closed.');
};

export default function CardJob() {
    const [params , setParams] = useState({});	//description :'' , location :'' ,full_time :false
	const {jobs ,loading, error} = useFetch(params);

    // console.log('params is ' , params)

    function handleParamChange(e) {
        const param = e.target.name
        let value = e.target.value
	    if(param ==='full_time'){
	    	value = e.target.checked
	    }
        setParams(prevParams =>{
            return{...prevParams , [param]:value}
        })
	    // console.log('target is' , e.target)
    }

    return (
        <>
            <Search params={params} onParamChang={handleParamChange} />
            <S.CardJob>
            {loading &&
                <>
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                </>
            }

            {jobs && jobs.map( (job) => <Job key= {job.id} job ={job} />)}


            {error && <Alert
                message="Hmmmm! An error has occurred "
                description="Please Try Refreshing"
                type="error"
                closable
                onClose={onClose}
                style={{width: 450, textAlign:'center' , margin:'250' ,   position: "absolute" }}
            /> }

            </S.CardJob>
    </>
    );
}


