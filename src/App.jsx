import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ExperienceDetail from './pages/ExperienceDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home client="corporate" />} />
        <Route path="/aero" element={<Home client="aero" />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/aero/project/:id" element={<ProjectDetail />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
        <Route path="/aero/experience/:id" element={<ExperienceDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App