import { GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'
import { MobileLayout } from './layouts/mobile/MobileLayout'
import { useAuthStore } from './core/store/UseAuth.store';
import { useEffect } from 'react';
import { useEventsStore } from './core/store/UseEvents.store';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  const { checkSession, user } = useAuthStore();
  const { getEvents } = useEventsStore();

  useEffect(() => {
    void (async () => {
      await checkSession();
      if (useAuthStore.getState().user) {
        await getEvents();
      }
    })();
  }, [checkSession, getEvents]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <MobileLayout user={user}/>
    </GoogleOAuthProvider>
  )
}

export default App
