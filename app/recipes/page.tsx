import { Suspense, useState } from "react";
import { CocktailGrid } from "../components";
import { useDebounce } from 'use-debounce';

export default function RecipePage() {

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">All cocktails</h1>
      <CocktailGrid />
    </main >
  );
}
