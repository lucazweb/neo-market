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

export const selfDefeatingPatterns = [
  "Personalização ",
  "Filtro Mental",
  "Generalização",
  "Maximização e minimização",
  "Pensamento dicotômico ou polarizado",
  "Raciocínio emocional",
  "Leitura da mente",
  "Catastrofização (Tudo ou Nada)",
  "Conclusões precipitadas",
  "Deveria e tenho que",
  "Rótulação",
  "Coparação injusta",
  "Atribuição de culpa",
];
