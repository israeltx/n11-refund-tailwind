import { Routes } from "./routes"
import { AuthProvider } from "./context/authContext"

export function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  )
}