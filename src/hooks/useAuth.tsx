import { use } from "react";
import { AuthContext } from "../context/authContext";


export function useAuth() {
  const context = use(AuthContext)
  return context
}