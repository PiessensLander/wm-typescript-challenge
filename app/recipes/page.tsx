"use client"
import { Suspense, useState } from "react";
import { CocktailGrid } from "../components";
import { useDebounce } from 'use-debounce';
import CocktailGridSkeleton from "../components/cocktail-grid/skeleton";

export default function RecipePage() {

  const [text, setText] = useState('');
  const [q] = useDebounce(text, 1200)

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">All cocktails</h1>
      <input type="text" name="q" id="q" onChange={e => setText(e.target.value)} />
      <CocktailGrid query={q} />
    </main >
  );
}
