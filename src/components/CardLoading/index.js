import { Card, Skeleton} from "antd";
import * as S from '../Card/style'


const { Meta } = Card;

export default function CardLoading(){
    return(
            <Card
                style={{ width: 470,borderRadius:7 ,padding:5, marginTop: 16 , boxShadow:'0.5px 0.5px lightgray' }}
            >
                <S.Charcompany  style={{backgroundColor:"rgba(215,215,215,0.97)"}}></S.Charcompany>
                <Skeleton loading={true}>
                    <S.TimeWithFullTime>
                        <S.DataTime>DataTime</S.DataTime>
                        <span>&#8226;</span>
                        <S.FullTime>Type</S.FullTime>
                    </S.TimeWithFullTime>
                    <Meta
                        title="{job.title}"
                        description="{job.company}"
                    />
                    <S.Location>location</S.Location>
                </Skeleton>
            </Card>

    )
}