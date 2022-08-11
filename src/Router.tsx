import { Route, Routes } from 'react-router-dom'

// Layouts
import { Wrapper } from './layouts/Wrapper'

// Pages
import { Home } from './pages/Home'
import { Issue } from './pages/Issue'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue" element={<Issue />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
