import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ExperienceDetail from './pages/ExperienceDetail'
import ScrollToTop from './components/ScrollToTop'

function RedirectHandler() {
  const navigate = useNavigate()
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const redirect = params.get('redirect')
    if (redirect) {
      navigate(redirect, { replace: true })
    }
  }, [])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RedirectHandler />
      <Routes>
        <Route path="/aero" element={<Home client="aero" />} />
        <Route path="/corporate" element={<Home client="corporate" />} />
        <Route path="/:client/project/:id" element={<ProjectDetail />} />
        <Route path="/:client/experience/:id" element={<ExperienceDetail />} />
        <Route path="*" element={<Navigate to="/aero" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App