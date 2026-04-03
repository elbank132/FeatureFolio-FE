import { GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'
import { MobileLayout } from './layouts/mobile/MobileLayout'


function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <MobileLayout />
    </GoogleOAuthProvider>
  )
}

export default App
