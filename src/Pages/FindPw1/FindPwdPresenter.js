import React from "react";

function FindPwdPresenter() {
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
            width:300
          }}
        >
          <div
            style={{
              width: '100%'
            }}
          >
            이름
          </div>
          <div>
            <input
              type="text"
              style={{
                width: '100%',
                height: 40,
                fontsize: 30,
                borderRadius: 15,
                border: '1px solid black',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div
            style={{
              width: '100%'
            }}
          >이메일</div>
          <div>
            <input
              type="text"
              style={{
                width: '100%',
                height: 40,
                fontsize: 30,
                borderRadius: 15,
                border: '1px solid black',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div
            style={{
              width: '100%'
            }}
          >아이디</div>
          <div>
            <input
              type="text"
              style={{
                width: '100%',
                height: 40,
                fontsize: 30,
                borderRadius: 15,
                border: '1px solid black',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Login"
              style={{
                width: '100%',
                height: 37,
                backgroundColor: "#32404D",
                color: "white",
                marginTop: 20,
                border: "1px solid black"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindPwdPresenter;
