import React from 'react'
import { RiLockPasswordFill} from "react-icons/ri";


function LoginPwd({
  onKeyUpEnter
}) {
  return (
    <div
      style={{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:10,
        border:'1px #000 solid',
        padding:5
      }}
    >
      <RiLockPasswordFill size={30} style={{
        marginRight:10
      }} />
      <input
        type="password"
        maxLength="20"
        placeholder="패스워드 입력"
        style={{
          flex:1,
          height: 40.35,
          background: "#FFFFFF",
          border: "none",
          borderRadius: 10,
          imeMode: 'disabled',
          display: 'inline',
          boxShadow: 'none',
        }}
        onKeyUp={onKeyUpEnter}
      />
    </div>
    )
}

export default LoginPwd