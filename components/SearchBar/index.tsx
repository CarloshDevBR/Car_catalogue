'use client'

import { useState } from "react"

import { SearchManuFacturer } from "../SearchManuFacturer"

export const SearchBar = () => {
    const [manuFacturer, setManuFacturer] = useState<string>('')

    const handleSearch = () => {}

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManuFacturer
                    manuFacturer={manuFacturer}
                    setManuFacturer={setManuFacturer}
                />
            </div>
        </form>
    )
}