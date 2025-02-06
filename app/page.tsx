import { Suspense } from "react"
import { Card } from "./components/card"
import { CocktailGrid } from "./components"
import CocktailGridSkeleton from "./components/cocktail-grid/skeleton"

export default async function Home() {

  return (
    <main id="main">
      <h1 className="text-2xl font-bold mb-4">Most popular cocktails</h1>
      <Suspense fallback={<CocktailGridSkeleton />}>
        <CocktailGrid type="popular" />
      </Suspense>
    </main>
  )

}
