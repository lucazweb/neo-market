export function generateRandomId(): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomNumber(): number {
  return Math.floor(Math.random() * 11) + 5;
}

export function calculateDiscountPrice(originalPrice: number, discount: number): number {
  const discountAmount = originalPrice * (discount / 100);
  return originalPrice - discountAmount;
}

export function handleCurrencyFormat (price: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
}