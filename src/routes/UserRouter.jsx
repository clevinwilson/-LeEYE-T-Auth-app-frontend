import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/user/LoginPage';
import ProfilePage from '../pages/user/ProfilePage';

function UserRouter() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/profile' element={<ProfilePage />} />

    </Routes>
  )
}

export default UserRouter