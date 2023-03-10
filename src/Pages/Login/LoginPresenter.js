import React from "react";
import { NavLink } from "react-router-dom";
import { AutoLogin, LoginPwd, LoginBtn, LoginId } from "./Component";

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
            <LoginId onChangeInputValue={onChangeInputValue} />
          </div>
          <div
            style={{
              marginTop: 20
            }}
          >
            <LoginPwd onKeyUpEnter={onKeyUpEnter} onChange={onChangePwdStyle} />
          </div>
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
