import cocktails from "./cocktails.json";

export async function GET() {

  const sortedCocktails = cocktails
    .map(cocktail => ({
      ...cocktail,
      totalAmount: cocktail.ingredients.length // Add property to sort on later
    }))
    .toSorted((a, b) => a.totalAmount - b.totalAmount)
    .map(({ totalAmount, ...rest }) => rest); // Remove previously added property

  await new Promise((resolve) => setTimeout(resolve, 1e3));
  return new Response(JSON.stringify(sortedCocktails));
}
