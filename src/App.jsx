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
        <Route path="/aero" element={<Home client="aero" />} />
        <Route path="/corporate" element={<Home client="corporate" />} />
        <Route path="/:client/project/:id" element={<ProjectDetail />} />
        <Route path="/:client/experience/:id" element={<ExperienceDetail />} />
        <Route path="*" element={<Navigate to="/aero" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App