import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginPresenter from './LoginPresenter'

function LoginContainer() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')

  const handleChangeInputValue = (event) => {
    const result = event.target.value.replace(/[^A-Za-z]/ig, '');
    setInputValue(result);
  }

  // useEffect(() => {

  //   fetch('http://3.36.87.0:8080/deu/').then(res => {
  //     return res.json()
  //   }).then(res => {
  //     console.log(res);
  //     debugger
  //   })
  // }, [])

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