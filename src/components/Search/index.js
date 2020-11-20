import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { Checkbox , Input ,Button } from 'antd';

import * as S from './style'

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

function Search() {
    return (
        <S.Wrapper>
            <Input size="medium" placeholder="Filter by text .." prefix={<FontAwesomeIcon icon={faSearch} color='rgb(89,100,224)' size="lg"/>} />
            <Input size="medium" placeholder="Filter by location .." prefix={<FontAwesomeIcon icon={faMapMarkerAlt} color='rgb(89,100,224)' size="lg"/>} />
           <div>
               <Checkbox onChange={onChange}>Full Time Only</Checkbox>
               <Button type="primary">Search</Button>
           </div>
        </S.Wrapper>

    );
}

export default Search;
