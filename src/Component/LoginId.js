import React from 'react'

function LoginId() {
  return (
    <div>
      <input
        type="text"
        maxLength="20"
        placeholder="아이디 입력"
        style={{
          width: 300,
          height: 40.35,
          margin: 10,
          background: "#FFFFFF",
          border: "1px solid black",
          borderRadius: 10,
          imeMode:'disabled'
        }}
      />
    </div>
  )
}

export default LoginId