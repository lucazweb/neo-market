import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { SearchFieldWrapper } from "./styled";

export const SearchField = ({ placeholder }: SearchFieldProps) => {
  return (
    <SearchFieldWrapper>
      <input placeholder={placeholder} type="text" />
      <button>
        BUSCAR <BiSearchAlt size={20} />
      </button>
    </SearchFieldWrapper>
  );
};

type SearchFieldProps = {
  placeholder?: string;
};
