import { Card } from "../card"

type GridType = "popular" | "all"

export const CocktailGrid = async ({ type = "all" }: { type?: GridType }) => {
    async function fetchPopularCocktails() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cocktails/popular`)
        return res.json()
    }

    async function fetchAllCocktails() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cocktails`)
        return res.json()
    }

    const data: Cocktail[] = type === "popular" ? await fetchPopularCocktails() : await fetchAllCocktails();

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            {data && data.map((item: Cocktail) => (
                <li className="col-span-1 lg:col-span-3" key={item.name}>
                    <Card cocktail={item} />
                </li>
            ))}
        </ul>
    )

}