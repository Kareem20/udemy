import React from "react";

export const SearchDataContext = React.createContext();

const SearchDataProvider = SearchDataContext.Provider;
const SearchDataConsumer = SearchDataContext.Consumer;

export { SearchDataConsumer, SearchDataProvider };
