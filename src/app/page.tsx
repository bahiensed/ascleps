"use client"

import { useEffect, useState } from "react";
import { words } from "@/constants";

export default function HeroText() {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const word = words[wordIndex];
    let interval: NodeJS.Timeout;

    if (!isDeleting && currentLetterIndex < word.length) {
      // Fase de digitação
      interval = setInterval(() => {
        setCurrentWord((prev) => prev + word[currentLetterIndex]);
        setCurrentLetterIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && currentLetterIndex > 0) {
      // Fase de apagamento
      interval = setInterval(() => {
        setCurrentWord((prev) => prev.slice(0, -1));
        setCurrentLetterIndex((prev) => prev - 1);
      }, 50); // Velocidade mais rápida para apagar
    } else if (currentLetterIndex === word.length && !isDeleting) {
      // Quando a palavra está totalmente digitada, esperar antes de apagar
      setTimeout(() => {
        setIsDeleting(true);
      }, 1000); // Pausa de 1 segundo antes de apagar
    } else if (currentLetterIndex === 0 && isDeleting) {
      // Passa para a próxima palavra depois de apagar
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearInterval(interval);
  }, [currentLetterIndex, isDeleting, wordIndex]);

  return (
    <div className="flex flex-col font-bold mt-16 mx-8 lg:w-1/2">
      <div className="leading-9 text-[36px] sm:text-5xl text-black">
        <p>O único <span className="red-gradient">aplicativo médico</span> que você precisa para:</p>
      </div>
      <p className="red-gradient mt-16 text-5xl sm:text-6xl w-full h-auto">
        {currentWord}
      </p>
    </div>
  );
}
