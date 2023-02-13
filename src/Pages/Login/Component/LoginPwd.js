import React from 'react'
<<<<<<< HEAD
import { AiFillLock } from 'react-icons/ai';
=======
import { RiLockPasswordFill} from "react-icons/ri";

>>>>>>> 5b72130f3bcdd3b9c15e71d8ebc724e0a5b351f4

function LoginPwd({
  onKeyUpEnter
}) {
  return (
<<<<<<< HEAD
    <div>


=======
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
>>>>>>> 5b72130f3bcdd3b9c15e71d8ebc724e0a5b351f4
      <input
        type="password"
        maxLength="20"
        placeholder="패스워드 입력"
        style={{
<<<<<<< HEAD
          width: 260,
=======
          flex:1,
>>>>>>> 5b72130f3bcdd3b9c15e71d8ebc724e0a5b351f4
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