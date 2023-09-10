import React from 'react';
import {useContext} from 'react';
import { PricingContext } from '../context/PricingContext';

const PricingCard = () => {

  const { allPricing , enabled , setEnabled} = useContext(PricingContext); 

  return (
    <div>
        {enabled ? (
             <>
                <h1>Basic</h1>
                <p>{allPricing.Full.Basic}</p>
             </>
        ) : (
            <>
                <h1>Basic</h1>
                <p>{allPricing.Monthly.Basic}</p>
            </>
        )}
       
    </div>
  );
};

export default PricingCard;
