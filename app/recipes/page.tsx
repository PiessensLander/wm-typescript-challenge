import { Suspense } from "react";
import { Card } from "../components/card";
import { CocktailGrid } from "../components";
import CocktailGridSkeleton from "../components/cocktail-grid/skeleton";

export default async function RecipePage() {

  async function fetchCocktails() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cocktails`)
    return res.json()
  }

  const data = await fetchCocktails()

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">All cocktails</h1>
      <Suspense fallback={<CocktailGridSkeleton />}>
        <CocktailGrid />
      </Suspense>
    </main>
  );
}
