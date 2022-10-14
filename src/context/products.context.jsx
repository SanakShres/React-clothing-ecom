import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json"

const INITIAL_STATE = {
    products: [],
}

export const ProductsContext = createContext(INITIAL_STATE);

export const ProductsContextProvider = ({children} ) => {
    const [products, setProducts] = useState(PRODUCTS)
    const value = {products, setProducts}

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}
