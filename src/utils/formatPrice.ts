export const formatPrice = (price: number) => {
    return price
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        .replace(/\s/g, ' ')
}
