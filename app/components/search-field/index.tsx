"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

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
        <div className="flex items-center bg-white border rounded w-full mb-4 gap-2 pr-2">
            <input
                type="text"
                placeholder="Search for a cocktail..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-2"
            />
            <button onClick={() => setText('')}>
                <X size={24} />
            </button>
        </div>
    );
}
