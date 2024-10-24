"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface BlinkingTextProps {
  text: string;
  className?: string;
  linkTo?: string;
}

export function BlinkingText({
  text,
  className = "",
  linkTo = "#",
}: BlinkingTextProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((v) => !v);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      <Link href={linkTo}> {text} </Link>
    </span>
  );
}
