import React from "react";
import { NavLink } from "react-router-dom";
import { AutoLogin, LoginPwd, LoginBtn, LoginId } from "./Component";
<<<<<<< HEAD
import Dialog from "../../Component/Dialog";
import { BsFillPersonFill, AiFillLock } from 'react-icons/ai';
=======
>>>>>>> 5b72130f3bcdd3b9c15e71d8ebc724e0a5b351f4

function LoginPresenter({
  onChangeInputValue,
  onKeyUpEnter,
  onClickLoginBtn,
  onChangePwdStyle,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          marginTop: 100,
          width: 800,
          minWidth: 800,
          height: 500,
          backgroundColor: "#A2CEF7",
          borderRadius: 60,

          display: "flex",
          flexDirection: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div>
<<<<<<< HEAD
            <LoginId
              onChangeInputValue={onChangeInputValue}
            />
          </div>

          <div>
            <LoginPwd
              onKeyUpEnter={onKeyUpEnter}
              onChange={onChangePwdStyle}
            />
          </div>

=======
            <LoginId onChangeInputValue={onChangeInputValue} />
          </div>
          <div 
            style={{
              marginTop: 20
            }}
          >
            <LoginPwd onKeyUpEnter={onKeyUpEnter} onChange={onChangePwdStyle} />
          </div>
>>>>>>> 5b72130f3bcdd3b9c15e71d8ebc724e0a5b351f4
          <AutoLogin />

          <div
            style={{
              display: "inline",
              float: "right",
              margin: 10,
            }}
          >
            <NavLink
              to="/signup"
              style={{
                marginRight: 10,
              }}
            >
              회원가입
            </NavLink>
            <NavLink to="/findpwd">비밀번호 찾기</NavLink>
          </div>
          <LoginBtn onClickLoginBtn={onClickLoginBtn} />
        </div>
      </div>
    </div>
  );
}

export default LoginPresenter;
