import { Card } from "../card"
import { Suspense } from "react";
import CocktailGridSkeleton from "./skeleton";

type GridType = "popular" | "all"

export const CocktailGrid = async ({ type = "all", searchParams }: { type?: GridType, query?: string, searchParams?: { q?: string } }) => {
    const query = searchParams?.q || "";

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
        <>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
                {cocktails && cocktails.map((item: Cocktail) => (
                    <li className="col-span-1 lg:col-span-3" key={item.name}>
                        <Card cocktail={item} />
                    </li>
                ))}

            </ul>
            {cocktails.length == 0 && <p>No cocktails found.</p>}

        </>


    )

}