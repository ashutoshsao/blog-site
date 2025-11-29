import { Blog, Signin, Signup } from '@repo/ui'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_PROD;
  const navigate = useNavigate()
  const homepageHandler = () => { navigate("/blog") }
  return (
    <Routes>
      <Route path="/signup" element={<Signup Link={Link} backendUrl={backendUrl} sendDetailSuccess={homepageHandler} />} />
      <Route path="/signin" element={<Signin Link={Link} backendUrl={backendUrl} sendDetailSuccess={homepageHandler} />} />
      <Route path="/blog" element={<Blog />} />
      {/* <Route path="/" element={<Langing />} /> */}
    </Routes>
  )
}

export default App
