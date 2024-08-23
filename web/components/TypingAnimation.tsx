"use client";

import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps {
  duration?: number;
  className?: string;
  active: boolean;
}

const bookRecommendationPrompts = [
  "Suggest a mystery with a twist ending.",
  "Recommend a sci-fi with strong world-building.",
];

export default function TypingAnimation({
  duration = 200,
  className,
  active,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState(0);
  const charIndex = useRef<number>(0);

  useEffect(() => {
    if (!active) {
      const currentPrompt = bookRecommendationPrompts[index];
      const typingEffect = setInterval(() => {
        if (charIndex.current < currentPrompt.length) {
          setDisplayedText(currentPrompt.substring(0, charIndex.current + 1));
          charIndex.current += 1;
        } else {
          clearInterval(typingEffect);
          setIndex((index + 1) % bookRecommendationPrompts.length);
          setDisplayedText("");
          charIndex.current = 0;
        }
      }, duration);
      return () => {
        clearInterval(typingEffect);
        setDisplayedText("");
        setIndex(0);
        setDisplayedText("");
        charIndex.current = 0;
      };
    }
  }, [index, setDisplayedText, active]);

  return <p className={className}>{displayedText}</p>;
}
