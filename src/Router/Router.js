import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChangePwd from '../Pages/ChangePwd';
import FindPwd from '../Pages/FindPwd';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
// import Login from '../Login'

function Router() {
  const navigate = useNavigate()
  
  useEffect(() => {
    if(window.location.pathname === '/') navigate('/login');
  }, []);
  
  return(
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/findpwd' element={<FindPwd/>}/>
      <Route path='/changepwd' element={<ChangePwd/>}/>

    </Routes>

  )
}

export default Router;