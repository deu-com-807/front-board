import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import FindPwd from '../Pages/FindPw1';
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
      <Route path='/findpw1' element={<FindPwd/>}/>
      <Route path='/findpw2' element={<Login/>}/>

    </Routes>

  )
}

export default Router;