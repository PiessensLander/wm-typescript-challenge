import { NextRequest } from "next/server";
import cocktails from "../cocktails.json";

export async function GET(request: NextRequest) {
    // I'll determine a cocktail's popularity by the amount of ingredients. Let's be honest, no one who wants to have a cocktail wants to spend half an hour maing one. This endpoint returns the 5 most popular cocktails, unless a specific limit is given via the queryparam '?limit='.
    const limit: string = request?.nextUrl?.searchParams.get("limit") ?? "5" // Defaults to 5 as string to be able to use parseInt() in the response.

    const sortedCocktails = cocktails
        .map(cocktail => ({
            ...cocktail,
            totalAmount: cocktail.ingredients.length // Add property to sort on later
        }))
        .toSorted((a, b) => a.totalAmount - b.totalAmount)
        .map(({ totalAmount, ...rest }) => rest); // Remove previously added property

    await new Promise((resolve) => setTimeout(resolve, 1e3));
    return new Response(JSON.stringify(sortedCocktails.slice(0, parseInt(limit))));
}
