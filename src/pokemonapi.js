import pikachu from './pikachu.json'

export async function search(name) {
  return new Promise(function (resolve) {
    return resolve(pikachu)
  })
}
