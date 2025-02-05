import { Suspense, useState } from "react";
import { CocktailGrid } from "../components";
import { useDebounce } from 'use-debounce';
import SearchField from "../components/search-field";

export default function RecipePage({ searchParams }: { searchParams: { q?: string } }) {

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">All cocktails</h1>
      <SearchField />
      <CocktailGrid searchParams={searchParams} />
    </main >
  );
}
