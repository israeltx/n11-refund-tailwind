import React, { useState } from "react"

import searchSvg from "../assets/search.svg"
import { CATEGORIES } from "../utils/categories";
import { formatCurreny } from "../utils/formatCurrency";

import { Input } from "../components/Input"
import { Button } from "../components/Button";
import { RefundItem } from "../components/RefundItem";
import { Pagination } from "../components/Pagination";

const REFUND_EXAMPLE = {
  id: '123',
  name: 'Israel',
  category: 'Transporte',
  amount: formatCurreny(34.5).replace('R$', ''),
  categoryImg: CATEGORIES['transport'].icon
}

export function Dashboard() {
  const [name, setName] = useState('')

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault()
    console.log(name);
  }


  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form onSubmit={fetchRefunds} className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6">
        <Input placeholder="Pesquisa pelo nome" onChange={(e) => setName(e.target.value)}/>
        <Button type="submit" variant="icon"><img src={searchSvg} alt="Ícone de pesquisa" className="w-5" /></Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={REFUND_EXAMPLE} />
      </div>
      <Pagination
        current={1}  
        total={10}
      />
    </div>
  )
}