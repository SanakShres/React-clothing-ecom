import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from "../shop-data.js";
import {
//   addCollectionAndDocuments,
  getCollectionAndDocuments,
} from "../utils/firebase/firebase.utils.js";

const INITIAL_STATE = {
  categories: {},
};

export const CategoriesContext = createContext(INITIAL_STATE);

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  //   useEffect(() => {
  //     addCollectionAndDocuments("categories", SHOP_DATA);
  //   }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
