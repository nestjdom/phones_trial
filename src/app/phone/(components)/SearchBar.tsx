"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search for a smartphone..." }: SearchBarProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(term => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <form className='search-bar'>
      <div className='search-bar__container'>
        <input
          role='searchbox'
          type='text'
          className='search-bar__input'
          placeholder={placeholder}
          onChange={e => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
      </div>
    </form>
  );
}
