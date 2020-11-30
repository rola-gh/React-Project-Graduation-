import {useState} from 'react'
import { Card ,Alert   } from 'antd';
import useFetch from './useFetch'
import Job from './Job'
import CardLoading from '../CardLoading'
import * as S from './style'

const onClose = (e) => {
    console.log(e, 'I was closed.');
};

export default function CardJob() {
    const [params , setParams] = useState({});
    const {jobs ,loading, error} = useFetch(params);
    console.log(params);

    function handleParamChange(e) {
        const param = e.target.name;
        const value = e.target.value
        setParams(prevParams => {
            return{...prevParams,[param]:value}
        })
    }

    return (
        <>
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
                style={{width: 450, textAlign:'center' , margin:'auto'  }}
            /> }

            </S.CardJob>
    </>
    );
}


