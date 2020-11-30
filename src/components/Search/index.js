import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { Checkbox , Input ,Button } from 'antd';

import * as S from './style'

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


function Search({params , onParamChang}) {
    return (
        <S.Wrapper>
            <Input  size="large" placeholder="  Filter by text .." prefix={<FontAwesomeIcon icon={faSearch} color='rgb(89,100,224)' size="lg"/>} />
            <S.Border/>
            <Input size="large" placeholder="  Filter by location .." prefix={<FontAwesomeIcon icon={faMapMarkerAlt} color='rgb(89,100,224)' size="lg"/>} />
            <S.Border/>
            <Checkbox onChange={onChange}  className='checkbox'>Full Time Only</Checkbox>
            <Button type="primary" className='btn-search'>Search</Button>
        </S.Wrapper>

    );
}

export default Search;
