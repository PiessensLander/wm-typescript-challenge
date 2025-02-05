"use client";
import { useEffect, useState } from "react";
import { Card } from "../card";
import CocktailGridSkeleton from "./skeleton";

type GridType = "popular" | "all";

export const CocktailGrid = ({ type = "all", query }: { type?: GridType; query?: string }) => {
    const [cocktails, setCocktails] = useState<Cocktail[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCocktails = async () => {
            setLoading(true);
            const url = query
                ? `${process.env.NEXT_PUBLIC_API_URL}/cocktails?q=${query}`
                : type === "popular"
                    ? `${process.env.NEXT_PUBLIC_API_URL}/cocktails/popular`
                    : `${process.env.NEXT_PUBLIC_API_URL}/cocktails`;

            try {
                const res = await fetch(url, { cache: "no-store" });
                const data = await res.json();
                setCocktails(data);
            } catch (error) {
                console.error("Error fetching cocktails:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCocktails();
    }, [type, query]); // Re-fetch when type or query changes

    if (loading) return <CocktailGridSkeleton />;

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            {cocktails &&
                cocktails.map((item: Cocktail) => (
                    <li className="col-span-1 lg:col-span-3" key={item.name}>
                        <Card cocktail={item} />
                    </li>
                ))}
        </ul>
    );
};
