import React from "react";

function LoginBtn({ onClickLoginBtn }) {
  const handleLoginBtn = (e) => {
    const inputValue =
      e.target.value = '';
  }

  return (
    <div>
      <input
        type="submit"
        value="Login"
        style={{
          width: 300,
          height: 37,
          backgroundColor: "#32404D",
          color: "white",
          margin: 10,
          border: "1px solid black",
        }}
        onClick={onClickLoginBtn}
      />
    </div>
  );
}

export default LoginBtn;
