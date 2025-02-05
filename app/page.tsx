import { Card } from "./components/card"

export default async function Home() {

  async function fetchCocktails() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cocktails/popular`)
    return res.json()
  }

  const data = await fetchCocktails()

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Most popular cocktails</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {data && data.map((item: Cocktail) => (
          <li className="col-span-1 lg:col-span-3" key={item.name}>
            <Card cocktail={item} />
          </li>
        ))}
      </ul>
    </main>
  )

}
