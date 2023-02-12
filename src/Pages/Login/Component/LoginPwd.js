import React from 'react'

function LoginPwd({
  onKeyUpEnter
}) {
  return (
    <div>
      <input
        type="password"
        maxLength="20"
        placeholder="패스워드 입력"
        style={{
          width: 300,
          height: 40.35,
          background: "#FFFFFF",
          margin: 10,
          border: "1px solid black",
          borderRadius: 10,
        }}
        onKeyUp={onKeyUpEnter}
      />
    </div>
    )
}

export default LoginPwd