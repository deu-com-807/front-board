import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChangePwd from '../Pages/ChangePwd';
import FindPwd from '../Pages/FindPwd';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
// import Login from '../Login'

function Router({ setDialogProps }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.pathname === '/') navigate('/login');
  }, []);

  return (
    <Routes>
      <Route path='/login' element={<Login setDialogProps={setDialogProps} />} />
      <Route path='/signup' element={<SignUp setDialogProps={setDialogProps} />} />
      <Route path='/findpwd' element={<FindPwd setDialogProps={setDialogProps} />} />
      <Route path='/changepwd' element={<ChangePwd setDialogProps={setDialogProps} />} />

    </Routes>

  )
}

export default Router;