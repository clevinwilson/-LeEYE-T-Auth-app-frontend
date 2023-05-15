import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/user/LoginPage';

function UserRouter() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
    </Routes>
  )
}

export default UserRouter