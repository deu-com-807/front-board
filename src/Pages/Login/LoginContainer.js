import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginPresenter from './LoginPresenter'

function LoginContainer({ setDialogProps }) {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')
  const [alert, setAlert] = useState('');

  // input 안의 value가 값이 ''일 때 setAlert

  useEffect(() => {
    fetch('login/allUsers')
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(res => {
        debugger
      })
  }, [])


  const handleChangeInputValue = (e) => {
    debugger
    // setInputValue()
  }

  const handleAlertMessage = () => {
    // if ()
    //   setAlert('');
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
    setDialogProps({
      isOpen: true,
      msg: "로그인 버튼을 눌렀습니다"
    })
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
      onChangeAlertMessage={handleAlertMessage}
    />
  )
}

export default LoginContainer