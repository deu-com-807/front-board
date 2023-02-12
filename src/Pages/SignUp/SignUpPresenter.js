/* eslint-disable no-undef */
import React from 'react'

const func = () => {
  console.log("asdasd");
}
function SignUpPresenter({
  onChangeEmail,
  onClickSubmit,
  onChangeId
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
          height: 700,
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
          <div
            style={{
              fontWeight: 1000
            }}>이름</div>
          <div>

            <input
              type="text"
              maxlength={10}

              style={{
                width: 300,
                height: 40,
                fontsize: 30,
                borderRadius: 15,
                marginTop: 5,
                border: 0
              }}
            />
          </div>

          <div
            style={{
              marginTop: 20,
              fontWeight: 1000
            }}>이메일</div>
          <div>
            <input
              type="text"
              maxlength={30}
              style={{
                width: 300,
                height: 40,
                fontsize: 30,
                borderRadius: 15,
                marginTop: 5,
                border: 0
              }}
              onChange={onChangeEmail}
            />
          </div>

          <div
            style={{
              marginTop: 20,
              fontWeight: 1000
            }}>아이디</div>
          <div>
            <input
              type="text"
              maxlength={20}
              style={{
                width: 300,
                height: 40,
                fontsize: 30,
                borderRadius: 15,
                marginTop: 5,
                border: 0
              }}
              onChange={onChangeId}
            />
          </div>

          <div
            style={{
              marginTop: 20,
              fontWeight: 1000
            }}>패스워드</div>
          <div>
            <input
              type="password"
              maxlength={10}
              style={{
                width: 300,
                height: 40,
                fontsize: 30,
                borderRadius: 15,
                marginTop: 5,
                border: 0
              }}
            />
          </div>

          <div
            style={{
              marginTop: 20,
              fontWeight: 1000
            }}>패스워드 확인
          </div>
          <div>
            <input
              type="password"
              maxlength={10}
              style={{
                width: 300,
                height: 40,
                fontsize: 30,
                borderRadius: 15,
                marginTop: 5,
                border: 0,
              }}
            />
          </div>

          <div>
            <button
              type="button"
              style={{
                width: 300,
                height: 37,
                left: 570,
                top: 726,
                backgroundColor: " #32404D",
                marginTop: 71,
                border: 0
              }}>
              <label
                style={{
                  color: "white",
                  fontSize: 22
                }}
                onClick={onClickSubmit}
              >
                회원가입
              </label>

            </button>
          </div>



        </div>
      </div>

    </div>
  )
}

export default SignUpPresenter;
