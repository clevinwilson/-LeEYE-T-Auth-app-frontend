import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRouter from './routes/userRouter';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* User route */}
        <Route path={'/*'} element={<UserRouter />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
