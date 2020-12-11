import {Link} from 'react-router-dom'
import { Switch } from 'antd';
import {ReactComponent as Sun} from "../../assists/iconsSun.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import * as S from './style'

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

function Header() {
    return (
        <S.Header>
            <Link to='/'><S.Logo className="logo">devjobs</S.Logo></Link>
            <S.Theme>
                <div style={{marginTop:-3 , marginRight:12}}><Sun style={{width:23}}/></div>
                <div style={{marginTop:1}}><Switch defaultChecked onChange={onChange}/></div>
                <div style={{marginTop:2 , marginLeft:12}}><FontAwesomeIcon icon={faMoon}  color='white' /></div>
            </S.Theme>
        </S.Header>
    );
}

export default Header;
