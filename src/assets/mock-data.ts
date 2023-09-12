import { Product } from "@/domain/models/products";

export const data: Product[] = [
  {
    id: generateRandomId(),
    name: "Controle Playstation",
    price: 18.9,
    image: "games/consoles/19-1.jpg",
  },
  {
    id: generateRandomId(),
    name: "Samsung M53",
    price: 18.9,
    image: "celulares/5_2.jpg",
  },
  {
    id: generateRandomId(),
    name: "Fone de Ouvido BT",
    price: 18.9,
    image: "games/fones/6_1_2.jpg",
  },
  {
    id: generateRandomId(),
    name: "Relógio Esportivo",
    price: 182.9,
    image: "relogios/8.jpg",
  },
  {
    id: generateRandomId(),
    name: "Apple iPad",
    price: 1833.9,
    image: "informatica/12_1.jpg",
  },
  {
    id: generateRandomId(),
    name: "Mochila escolar",
    price: 18.9,
    image: "informatica/15-1.jpg",
  },
  {
    id: generateRandomId(),
    name: "Fone BT",
    price: 233.9,
    image: "games/fones/7_1_2.jpg",
  },
  {
    id: generateRandomId(),
    name: "Caixa de som BT",
    price: 200.9,
    image: "informatica/12_1.jpg",
  },
  
];


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
