import { createContext } from "react";
import { useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({children}) => {
    const allPricing = {
        Full : {
            Basic: "$199.99",
            Pro: "$250.99",
            Master: "$145.99",
        },
        Monthly : {
            Basic: "$19.99",
            Pro: "$22.99",
            Master: "$15.99",
        },
    };
    const [enabled, setEnabled] = useState(false);
    return (
        <PricingContext.Provider value={{allPricing , enabled , setEnabled } } >{children}</PricingContext.Provider>      
    );
};