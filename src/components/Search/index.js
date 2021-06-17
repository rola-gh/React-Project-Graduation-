import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { Checkbox , Input ,Button } from 'antd';

import * as S from './style'



function Search({params , onParamChang }) {

    // console.log('param', params)
    return (
    <S.Wrapper>
    {/*<form>*/}
        <Input  size="large" placeholder="  Filter by text .."
                prefix={<FontAwesomeIcon icon={faSearch} color='rgb(89,100,224)' size="lg"/>}
                onChange={onParamChang} value={params.description} name='description' type='text'
        />
        <S.Border/>
        <Input size="large" placeholder="  Filter by location .."
               prefix={<FontAwesomeIcon icon={faMapMarkerAlt} color='rgb(89,100,224)' size="lg"/>}
               onChange={onParamChang} value={params.location} name = 'location' type='text'

        />
        <S.Border/>
        <Checkbox className='checkbox'
                  onChange={onParamChang} checked={params.full_time}
                  name='full_time' id='full-time' type='checkbox'
        >Full Time Only</Checkbox>

        <Button type="primary" className='btn-search'>Search</Button>
    {/*</form>*/}
    </S.Wrapper>
);
}




export default Search;
