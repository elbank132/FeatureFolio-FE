import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This is your "Shell"
    children: [
      {
        index: true, // Equivalent to path: ''
        element: <Home />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
