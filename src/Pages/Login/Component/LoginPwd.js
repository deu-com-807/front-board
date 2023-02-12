import React from 'react'

function LoginPwd() {
  
  const handleKeyUpEnter = (e) => {
    // e.target.value.addEventListener('keyup', (e) => {
    //   if(e.keyCode === 13) // login;
    // });
  }
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
      />
    </div>
    )
}

export default LoginPwd