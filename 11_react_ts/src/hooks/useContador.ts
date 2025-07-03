import { useState } from "react";

// Tipo de retorno do hook
type UseContador = {
  count: number;
  incrementar: () => void;
  decrementar: () => void;
  resetar: () => void;
};

export function useContador(valorInicial: number = 0): UseContador {
  const [count, setCount] = useState<number>(valorInicial);

  const incrementar = () => setCount((prev) => prev + 1);
  const decrementar = () => setCount((prev) => prev - 1);
  const resetar = () => setCount(valorInicial);

  return {
    count,
    incrementar,
    decrementar,
    resetar,
  };
}
