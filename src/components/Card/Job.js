import { Card  ,Skeleton  } from 'antd';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment-timezone'
import * as S from './style'

const { Meta } = Card;

const RandomRGB =()=>{
    const red = Math.floor(Math.random()*175);
    const green= Math.floor(Math.random()*175);
    const blue= Math.floor(Math.random()*175);

    return `rgb(${red}, ${green}, ${blue})`;
};

export default function Job({job}) {

    return(
    <>
        <Card
            style={{ width: 470,borderRadius:7 ,padding:5, marginTop: 16 , boxShadow:'0.5px 0.5px lightgray' }}
            extra={<Link to={`/details/${job.id}`}><FontAwesomeIcon icon={faEye}  size="lg" color='rgb(89,100,224)' />&nbsp;VIEW DETAILS</Link>}
        >
            <S.Charcompany style={{backgroundColor:RandomRGB()}}>{job.company.charAt(0)}</S.Charcompany>
            <Skeleton loading={false} >
                <S.TimeWithFullTime>
                    <S.DataTime>{ moment(job.created_at).fromNow()}</S.DataTime>
                    <span>&#8226;</span>
                    <S.FullTime>{job.type}</S.FullTime>
                </S.TimeWithFullTime>
                <Meta
                    title={job.title}
                    description={job.company}
                />
                <S.Location>{job.location}</S.Location>
            </Skeleton>
        </Card>
    </>
    )
}