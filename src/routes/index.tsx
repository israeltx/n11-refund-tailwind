import { AuthRoutes } from "./AuthRoutes";
import { useAuth } from "../hooks/useAuth";
import { BrowserRouter } from "react-router";
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";
import { EmployeeRoutes } from "./EmployeeRoutes";

const isLoading = false


export function Routes() {
  const {session} = useAuth()

  function Route() {
    switch (session?.user.role) {
      case 'employee':
        return <EmployeeRoutes />
      case 'manager':
        return <ManagerRoutes />
      default:
        return <AuthRoutes />
    }
  }


  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}