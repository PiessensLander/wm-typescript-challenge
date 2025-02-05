"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchField() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Set initial state based on the URL query
    const [text, setText] = useState(searchParams.get("q") || "");
    const [debouncedQuery] = useDebounce(text, 500);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (debouncedQuery) {
            params.set("q", debouncedQuery);
        } else {
            params.delete("q"); // Remove query if empty
        }

        router.replace(`?${params.toString()}`, { scroll: false });
    }, [debouncedQuery, router]);

    return (
        <input
            type="text"
            placeholder="Search for a cocktail..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 rounded w-full mb-4"
        />
    );
}
