import React,{useState} from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
  return (
    <SearchContext.Provider
      value={{ dark, setDark}}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
