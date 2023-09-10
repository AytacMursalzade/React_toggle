import { useContext } from 'react';
import { PricingContext } from './context/PricingContext';
import Toggle from "./components/Toggle";
import './App.css';
import PricingCard from './components/PricingCard';


function App() {
  const {allPricing , enabled , setEnabled} = useContext(PricingContext);
  return (
    <>
      <Toggle />
      {/* <h1 className="text-5xl">{name.Monthly.Basic}</h1> */}
      <PricingCard />
    </>
  );
}

export default App;
