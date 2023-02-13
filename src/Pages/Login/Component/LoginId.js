import React from 'react'
import { BsFillPersonFill} from "react-icons/bs";


function LoginId({
  onChangeInputValue
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
      <BsFillPersonFill size={30} style={{
        marginRight:10
      }} />
      <input
        type="text"
        maxLength="20"
        placeholder="아이디 입력"
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
        onChange={onChangeInputValue}
      />
    </div>
  )
}

export default LoginId