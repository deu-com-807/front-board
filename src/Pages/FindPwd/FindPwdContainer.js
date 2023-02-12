import React, { useState } from 'react'
import FindPwdPresenter from './FindPwdPresenter'

function FindPwdContainer() {
  const [email, setEmail] = useState('') 

  const handleClickSubmit = () => {
    let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const isEmail = emailReg.test(email)
    if(isEmail === false){
      alert('이메일 다시 입력하셈');
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  return (
    <FindPwdPresenter 
    onClickSubmit={handleClickSubmit}
    onChangeEmail={handleChangeEmail}
    />
    )
}

export default FindPwdContainer