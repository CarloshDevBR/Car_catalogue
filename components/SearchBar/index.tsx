'use client';

import { useState } from 'react';

import { SearchManuFacturer } from '../SearchManuFacturer';

import Image from 'next/image';

type OtherClassesProps = {
  otherClasses: string;
};

const SearchButton = ({ otherClasses }: OtherClassesProps) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt="maginifying glass" width={40} height={40} className="objectr-contain" />
  </button>
);

export const SearchBar = () => {
  const [manuFacturer, setManuFacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer manuFacturer={manuFacturer} setManuFacturer={setManuFacturer} />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image src="/model-icon.png" alt="model" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" />

        <input className="searchbar__input" type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" />

        <SearchButton otherClasses="sm:hidden" />
      </div>
    </form>
  );
};
