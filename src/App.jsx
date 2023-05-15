import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import UserRouter from './routes/userRouter';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* User route */}
        <Route path={'/*'} element={<UserRouter />} />


      </Routes>
      <ToastContainer />
      
    </BrowserRouter>
  )
}

export default App
