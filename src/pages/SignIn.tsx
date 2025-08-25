import { useActionState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { email } from "zod";

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, {
    email: "",
    password: ""
  })

  async function signIn(prevState: any, formData: FormData) {
    const email = formData.get("email")
    const password = formData.get("password")

    return {email, password}

    // Simulate API response
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve("Ok")
    //   }, 2000)
    // })
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input required name="email" legend="E-mail" type="email" placeholder="seu@email.com" />
      <Input required name="password" legend="Senha" type="password" placeholder="123456" />
      
      <Button type="submit" isLoading={isLoading}>Entrar</Button>

      <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>      
    </form>
  )
}