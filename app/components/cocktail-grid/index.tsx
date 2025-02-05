import { Card } from "../card"
import { Suspense } from "react";
import CocktailGridSkeleton from "./skeleton";

type GridType = "popular" | "all"

export const CocktailGrid = async ({ type = "all", query, currentPage }: { type?: GridType, query?: string, currentPage?: number }) => {

    async function fetchCocktails() {
        const url = query
            ? `${process.env.NEXT_PUBLIC_API_URL}/cocktails?q=${query}`
            : type === "popular"
                ? `${process.env.NEXT_PUBLIC_API_URL}/cocktails/popular`
                : `${process.env.NEXT_PUBLIC_API_URL}/cocktails`;

        const res = await fetch(url);
        return res.json();
    }

    const cocktails: Cocktail[] = await fetchCocktails();

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            {cocktails && cocktails.map((item: Cocktail) => (
                <li className="col-span-1 lg:col-span-3" key={item.name}>
                    <Card cocktail={item} />
                </li>
            ))}
        </ul>

    )

}