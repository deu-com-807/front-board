import React from 'react'

function Dialog({
  onChangeAlertMessage
}) {
  return (
    <div
      style={{
        marginTop: 100,
        width: 300,
        height: 150,
        backgroundColor: 'rgba(50, 64, 77, 0.9)',
        borderRadius: 30,
      }}
    >
      <div>{onChangeAlertMessage}</div>
      <input type='submit' value='확인'
        style={{
          float: 'right',
          marginRight: 30,
          marginTop: 100
        }}
      />
    </div>
  )
}

export default Dialog