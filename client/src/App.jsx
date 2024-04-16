import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminRoutes from "./Routes/AdminRoutes"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/admin/*' element={<AdminRoutes />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
