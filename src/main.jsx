import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout.jsx';
import Hostel from './Components/Hostel.jsx'
import Restaurants from './Components/Restaurants.jsx'
import Stationary from './Components/Stationary.jsx';
import Other from './Components/Other.jsx'
import Signin from './Components/Signin.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Hostel />
      }, 
      {
        path: 'restaurants',
        element: <Restaurants />
      }, 
      {
        path: 'stationary',
        element: <Stationary />
      },
      {
        path: 'other',
        element: <Other />
      },
      {
        path: 'signin',
        element: <Signin />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-jq2ew3muejqdcrf8.us.auth0.com"
    clientId="eBpEPzcW0KaHFLWR6WRx4ks8aBmPUlrp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router}/></Auth0Provider>
  </StrictMode>,
)
