import AppRoutes from "./routes/AppRoutes"
import { Toaster } from 'react-hot-toast';

import './App.css'

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  )
}

export default App
