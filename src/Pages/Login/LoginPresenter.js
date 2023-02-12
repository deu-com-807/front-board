import React from 'react'

function LoginPresenter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>

    <div style={{
      marginTop: 100,
      width: 800,
      height: 500,
      backgroundColor: '#A2CEF7',
      borderRadius: 60,

      display: 'flex',
      flexDirection: 'center',
      alignItems: 'center'
    }}>
    <div style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <div><input type='text' maxlength='20' placeholder='아이디 입력'
        style={{
          width: 300,
          height: 40.35,
          margin: 10,
          background: '#FFFFFF',
          border: '1px solid black',
          borderRadius: 10
        }}
      /></div>
      <div><input type='passward' maxlength='20' placeholder='패스워드 입력'
        style={{
          width: 300,
          height: 40.35,
          background: '#FFFFFF',
          margin: 10,
          border: '1px solid black',
          borderRadius: 10,
        }}
      /></div>
      <div>
        <div style={{
          display:'inline',
          float: 'left',
          margin: 10,
        }}>
          <label
            style={{
              width: 100
            }}
          ><input type='checkbox'/>자동 로그인
          </label></div>
        <div style={{
          display:'inline',
          float: 'right',
          margin: 10,
        }}>
          <a href='/'
            style={{
              marginRight: 10
            }}
          >회원가입</a>
          <a href='/'>비밀번호 찾기</a>
        </div>
      </div>
      <div><input type='submit' value='Login'
        style={{
          width: 300,
          height: 37,
          backgroundColor: '#32404D',
          color: 'white',
          margin: 10,
          border: '1px solid black'
        }}
      /></div>
    </div>
    </div>

    </div>
    )
}

export default LoginPresenter