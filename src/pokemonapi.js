export async function search(name) {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return result.json()
}

