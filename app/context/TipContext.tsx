'use client';

import React, { createContext, useState, useMemo, ReactNode } from 'react';

interface TipContextProps {
  bill: number;
  setBill: (value: number) => void;
  tip: number;
  setTip: (value: number) => void;
  people: number;
  setPeople: (value: number) => void;
  errorMessage: string;
  setErrorMessage: (value: string) => void;
}

export const TipContext = createContext<TipContextProps | undefined>(undefined);

interface TipProviderProps {
  children: ReactNode;
}

export const TipProvider: React.FC<TipProviderProps> = ({ children }) => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const value = useMemo(
    () => ({
      bill,
      setBill,
      tip,
      setTip,
      people,
      setPeople,
      errorMessage,
      setErrorMessage,
    }),
    [bill, tip, people, errorMessage]
  );

  return <TipContext.Provider value={value}>{children}</TipContext.Provider>;
};
