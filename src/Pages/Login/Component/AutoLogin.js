import React from "react";

function AutoLogin() {
  return (
    <div
      style={{
        display: "inline",
        float: "left",
        margin: 10,
      }}
    >
      <label
        style={{
          width: 100,
        }}
      >
        <input type="checkbox" />
        자동 로그인
      </label>
    </div>
  );
}

export default AutoLogin;
