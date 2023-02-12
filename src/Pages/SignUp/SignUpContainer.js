import React, { useState } from 'react'
import SignUpPresenter from './SignUpPresenter'


function SignUpContainer() {
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")

  const handleClickSubmit = () => {
    let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const isEmail = emailReg.test(email)
    if (isEmail === false) {
      alert('이메일 다시 입력하셈');
    }
    let idReg = /^[a-zA-Z0-9]+$/;
    const isId = idReg.test(id)
    if (isId === false) {
      alert('아이디 다시 입력하셈');
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleClickIdkSubmit = () => {
    let idReg = /^[a-zA-Z0-9]+$/;
    const isId = idReg.test(id)
    if (isId === false) {
      alert('아이디 다시 입력하셈');
    }
  }

  const handleChangeId = (e) => {
    setId(e.target.value)
  }

  return (
    <SignUpPresenter
      onClickSubmit={handleClickSubmit}
      onChangeEmail={handleChangeEmail}
      onClickIdsumbit={handleClickIdkSubmit}
      onChangeId={handleChangeId}
    />
  )
}

export default SignUpContainer