import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { supabase } from './services/supabaseClient';

async function testConnection() {
  const { data, error } = await supabase.from('news').select('*').limit(1);
  if (error) console.error("❌ Error al conectar con Supabase:", error.message);
  else console.log("✅ Conexión a Supabase exitosa:", data);
}

testConnection();
