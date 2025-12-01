import { Blogs, Signin, Signup, Blog, Landing } from '@repo/ui'
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_PROD;
  const navigate = useNavigate()
  const homepageHandler = () => { navigate("/blogs") }
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/signup" element={<Signup Link={Link} backendUrl={backendUrl} sendDetailSuccess={homepageHandler} />} />
        <Route path="/signin" element={<Signin Link={Link} backendUrl={backendUrl} sendDetailSuccess={homepageHandler} />} />
        <Route path="/blogs" element={<Blogs ref="/blogs" Link={Link} backendUrl={backendUrl} />} />
        <Route path="/blog/:id" element={<Blog ref="/blogs" Link={Link} useParams={useParams} backendUrl={backendUrl} useQuery={useQuery} />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </QueryClientProvider>)
}

export default App
