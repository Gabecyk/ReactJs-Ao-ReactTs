import { useEffect, useRef } from "react";

export default function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Armazena a função mais recente
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Configura o intervalo
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (delay != null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}