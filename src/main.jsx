import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import "./App.css";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pages/details/:detailId',
    element: <DetailsPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
