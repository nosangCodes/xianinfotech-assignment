import React from 'react'

export default function SearchInput({ value, onChange }) {
  return (
    <div className="flex md:w-[340px] flex-row  items-center border rounded-md">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        type="text"
        className="focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-ring w-full text-base py-1 px-3 disabled:bg-zinc-900/20 disabled:text-neutral-500/30 disabled:animate-pulse"
      />
      <button className="ml-auto focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-ring ring-cyan-100 focus-visible:bg-primary/90 cursor-pointer bg-primary hover:bg-primary/90 transition-colors h-full px-3 flex items-center justify-center">
        <img className="h-[80%]" src="/search.svg" />
      </button>
    </div>
  )
}
