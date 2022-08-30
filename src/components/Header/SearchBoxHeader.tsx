import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const searchIcon = faSearch as IconProp;

const SearchBoxHeader = (): JSX.Element => {
  const [valInput, setValInput] = useState("");
  return (
    <>
      <input
        onChange={(e) => setValInput(e.target.value)}
        type="text"
        value={valInput}
        placeholder="جستجو ..."
        className="w-full bg-gray-100 dark:bg-slate-600 mt-2 pr-7 py-1 rounded-sm"
      />
      <FontAwesomeIcon icon={searchIcon} className="relative -top-7 right-2" />
    </>
  );
};

export default SearchBoxHeader;
