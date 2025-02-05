import Link from "next/link";

export default function NotFoundPage() {

    return (
        <main className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">This page doesn't exist.</h1>
            <Link href='/' className="animate-all duration-300 underline decoration-black/30 hover:decoration-black">Go back home</Link>
        </main>
    );
}
