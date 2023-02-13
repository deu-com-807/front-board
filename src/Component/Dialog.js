import React from 'react'

function Dialog({
  msg,
  setDialogProps
}) {
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      top: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div
        style={{
          width: 300,
          height: 150,
          backgroundColor: '#32404D',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'

        }}
      >
        <div style={{
          flex: 1,
          textAlign: 'center',
          paddingTop: 50,
          color: '#fff'

        }}>
          {msg}
        </div>
        <div style={{}}>
          <button
            style={{
              backgroundColor: '#ddd',
              borderRadius: 5,
              float: 'right',
              margin: 10
            }}
            onClick={() => {
              setDialogProps({
                isOpen: false,
                msg: ""
              })
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialog