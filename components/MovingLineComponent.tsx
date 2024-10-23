"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MessageItem {
  text: string;
  link?: string;
}

interface MovingLineProps {
  messages: MessageItem[];
  speed?: number;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  separator?: string;
  className?: string;
}

export default function MovingLine({
  messages,
  speed = 50,
  backgroundColor = "bg-primary",
  textColor = "text-primary-foreground",
  fontSize = "text-sm md:text-base",
  separator = "•",
  className,
}: MovingLineProps) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(
        (prevPosition) =>
          (prevPosition + 1) %
          (messages.map((m) => m.text).join("").length * 10)
      );
    }, speed);

    return () => clearInterval(interval);
  }, [messages, speed]);

  const renderMessage = (message: MessageItem, index: number) => {
    const content = (
      <span key={index} className="px-4">
        {message.link ? (
          <Link
            href={message.link}
            className="underline hover:text-secondary-foreground"
          >
            {message.text}
          </Link>
        ) : (
          message.text
        )}
      </span>
    );

    return index < messages.length - 1 ? (
      <>
        {content}
        <span className="px-4">{separator}</span>
      </>
    ) : (
      content
    );
  };

  const displayContent = (
    <>
      {messages.map(renderMessage)}
      {messages.map(renderMessage)}
    </>
  );

  return (
    <div
      className={cn(
        backgroundColor,
        textColor,
        "py-3 md:py-4 overflow-hidden",
        className
      )}
      role="marquee"
      aria-live="off"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn("whitespace-nowrap font-medium", fontSize)}
          style={{
            transform: `translateX(-${position}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {displayContent}
        </div>
      </div>
    </div>
  );
}
