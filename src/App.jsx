import AppRoutes from "./routes/AppRoutes"
import { Toaster } from 'react-hot-toast';

import './App.css'

function App() {
  return (
    <div className="inter-tight">
      <AppRoutes />
      <Toaster />
    </div>
  )
}

export default App
