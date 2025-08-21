export function formatCurreny(value: number) {
  const currency = Intl.NumberFormat("pt-br", {
    style: 'currency',
    currency: 'BRL'
  })

  return currency.format(value)
}