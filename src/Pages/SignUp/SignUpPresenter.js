import React from 'react'

function SignUpPresenter() {
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
          }}
        > 
        <div>이름</div>
        <div>
        
          <input
            type="text"
            style={{
              width: 300,
              height: 40,
              fontsize: 30,
              borderRadius : 15
            }}
          />
        </div>

        <div>이메일</div>
        <div>
          <input
            type="text"
            style={{
              width: 300,
              height: 40,
              fontsize: 30,
              borderRadius : 15
            }}
          />
        </div>

        <div>아이디</div>
        <div>
          <input
            type="text"
            style={{
              width: 300,
              height: 40,
              fontsize: 30,
              borderRadius : 15
            }}
          />
        </div>

        <div>패스워드</div>
        <div>
          <input
            type="text"
            style={{
              width: 300,
              height: 40,
              fontsize: 30,
              borderRadius : 15
            }}
          />
        </div>

        <div>패스워드확인</div>
        <div>
          <input
            type="text"
            style={{
              width: 300,
              height: 40,
              fontsize: 30,
              borderRadius : 15
            }}
          />
        </div>





        </div>
      </div>

    </div>
  )
}

export default SignUpPresenter