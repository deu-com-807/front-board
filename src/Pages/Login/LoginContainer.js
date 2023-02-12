import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginBtn } from './Component';
import LoginPresenter from './LoginPresenter'

function LoginContainer() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')

  const handleChangeInputValue = (event) => {
    const result = event.target.value.replace(/[^A-Za-z]/ig, '');
    setInputValue(result); 
  } 

  const handleKeyUpEnter = (e) => {
    // debugger
    // e.target.value.addEventListener('keyup', (e) => {
    //   if(e.keyCode === 13) 
    // });
  }

  const handleLoginBtn = (e) => {
    console.log(e);
  }

  const handleClickSignupBtn = () => {
    navigate('/signup')
  }

  return (
    <LoginPresenter 
      onChangeInputValue={handleChangeInputValue}
      onKeyUpEnter={handleKeyUpEnter}
      onClickLoginBtn={handleLoginBtn}
      // onChangePwdStyle={handlePwdStyle}
      onClickSignupBtn={handleClickSignupBtn}
    />
    )
}

export default LoginContainer