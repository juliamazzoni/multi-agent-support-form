import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
import { configureGumnut } from "@gumnutdev/react"

configureGumnut({
  projectId: import.meta.env.VITE_GUMNUT_PROJECT_ID,
  localDevKey: import.meta.env.DEV ? import.meta.env.VITE_GUMNUT_LOCAL_DEV_KEY : undefined,
  // localDevKey: import.meta.env.VITE_GUMNUT_LOCAL_DEV_KEY,
});

createRoot(document.getElementById('root')!).render(<App />)
