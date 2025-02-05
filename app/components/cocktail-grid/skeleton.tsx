import CardSkeleton from "../card/skeleton";

export default function CocktailGridSkeleton() {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </ul>
    )

}