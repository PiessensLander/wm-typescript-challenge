import { NextRequest } from "next/server";
import cocktails from "./cocktails.json";

export async function GET(request: NextRequest) {
  const query: string = request?.nextUrl?.searchParams.get("q") ?? "";

  const sortedCocktails = query
    ? cocktails.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())) : cocktails
      .map(cocktail => ({
        ...cocktail,
        totalAmount: cocktail.ingredients.length // Add property to sort on later
      }))
      .toSorted((a, b) => a.totalAmount - b.totalAmount)
      .map(({ totalAmount, ...rest }) => rest); // Remove previously added property

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return new Response(JSON.stringify(sortedCocktails));
}
