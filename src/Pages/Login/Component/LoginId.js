import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';

function LoginId({
  onChangeInputValue
}) {

  return (
    <div>
      <BsFillPersonFill size={35} />
      <input
        type="text"
        maxLength="20"
        placeholder="아이디 입력"
        style={{
          width: 260,
          height: 40.35,
          margin: 10,
          background: "#FFFFFF",
          border: "1px solid black",
          borderRadius: 10,
          imeMode: 'disabled'
        }}
        onChange={onChangeInputValue}
      />

    </div>
  )
}

export default LoginId