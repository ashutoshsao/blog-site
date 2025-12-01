import { Blogs, Signin, Signup, Blog, Landing, Publish } from '@repo/ui'
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_PROD;
  const navigate = useNavigate()
  const homePageHandler = () => { navigate("/blogs") }
  const createPageHandler = () => { navigate("/publish") }
  const publishSuccessHandler = (id: string) => { navigate(`/blog/${id}`) }
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/signup" element={<Signup Link={Link} backendUrl={backendUrl} sendDetailSuccess={homePageHandler} />} />
        <Route path="/signin" element={<Signin Link={Link} backendUrl={backendUrl} sendDetailSuccess={homePageHandler} />} />
        <Route path="/blogs" element={<Blogs ref="/blogs" Link={Link} backendUrl={backendUrl} createPageRef={createPageHandler} />} />
        <Route path="/blog/:id" element={<Blog ref="/blogs" Link={Link} useParams={useParams} backendUrl={backendUrl} useQuery={useQuery} createPageRef={createPageHandler} />} />
        <Route path="/publish" element={<Publish ref="/blogs" Link={Link} backendUrl={backendUrl} createPageRef={createPageHandler} onPublishSuccess={publishSuccessHandler} />} />
        <Route path="/" element={<Landing Link={Link} />} />
      </Routes>
    </QueryClientProvider>)
}

export default App
