import { createContext, useState } from "react";

const INITIAL_STATE = {
    isCartOpen: false,
}

export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({children} ) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = {isCartOpen, setIsCartOpen}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}