import { useNavigate, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar'
import DashBoardLayout from './layout/DashBoardLayout'
import ProductCreatePage from './pages/ProductCreate'
import ProductReadPage from './pages/ProductRead'
function App() {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<DashBoardLayout />} >
        <Route index element={() => navigate('/read')} />
        <Route path="/create" element={<ProductCreatePage />} />
        <Route path="/read" element={<ProductReadPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default App
