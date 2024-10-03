import { useContext } from 'react';
import { TipContext } from '../context/TipContext';

export const useTipCalculator = () => {
  const context = useContext(TipContext);

  if (!context) {
    throw new Error("useTipCalculator must be used within a TipProvider");
  }

  const { bill, setBill, tip, setTip, people, setPeople, errorMessage, setErrorMessage } = context;

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(parseFloat(e.target.value) || 0);
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setPeople(value);
    setErrorMessage(value <= 0 ? "Can't be zero" : '');
  };

  const handleTipClick = (tipValue: number) => setTip(tipValue);

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setTip(parseFloat(e.target.value) || 0);

  return {
    bill,
    tip,
    people,
    errorMessage,
    handleBillChange,
    handlePeopleChange,
    handleTipClick,
    handleCustomTipChange,
  };
};
