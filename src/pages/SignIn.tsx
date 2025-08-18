import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignIn() {
  return (
    <form action="" className="w-full flex flex-col gap-4">
      <Input required legend="E-mail" type="email" placeholder="seu@email.com"/>
      <Input required legend="Senha" type="password" placeholder="123456"/>
      <Button>Entrar</Button>
    </form>
  )
}