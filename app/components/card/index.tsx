export const Card = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <div className="flex border border-gray-200 bg-white/50 p-4">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{cocktail.name}</h2>
        {cocktail.category && <span className="mr-1 inline-block rounded bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-800 last:mr-0">
          {cocktail.category}
        </span>}

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {cocktail.ingredients.map((item, index) => (
            <li key={`${item.ingredient}-${index}`}>

              {item.special
                ? <span className="font-semibold">{item.special}</span>
                : `${item.amount} ${item.unit} ${item.ingredient} ${item.label ? `(${item.label})` : ''}`
              }

            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">Preparation</h3>
        <div className="text-sm">
          Build into an old-fashioned glass filled with ice. Top with a splash
          of soda water.
        </div>

        {cocktail.glass &&
          <>
            <h3 className="text-lg font-bold">Preferred glass</h3>
            <div className="text-sm">
              {cocktail.glass} glass
            </div>
          </>

        }

      </div>
    </div>
  );
};
