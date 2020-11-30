import {Avatar, Card, Skeleton} from "antd";

const { Meta } = Card;

export default function CardLoading(){
    return(
            <Card
                style={{ width: 470,borderRadius:7 ,padding:5, marginTop: 16 , boxShadow:'0.5px 0.5px lightgray' }}
            >
                <Skeleton loading={true} avatar active>
                    <div> </div>
                    <h1> </h1>
                    <p> </p>
                    <Meta
                        avatar={
                            <Avatar src=""  />
                        }
                        title='title'
                        description="desc"
                    />
                </Skeleton>
            </Card>

    )
}