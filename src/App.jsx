import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'

/*
 * Data router (react-router v7, library mode).
 *
 * `/`    landing page (all sections are hash anchors inside HomePage, so a
 *        BrowserRouter is safe — a HashRouter would fight with #services)
 * `*`    unknown paths fall back to the landing page until subpages exist
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App


