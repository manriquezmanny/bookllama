"use client";
import { useState } from "react";
import TypingAnimation from "./TypingAnimation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AnimatedInput() {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <label className="relative mx-auto mt-8 block h-12 max-w-xl">
      <div className="relative h-full">
        <Input
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="h-full rounded-lg pr-28 text-gray-100"
        />
        <TypingAnimation
          active={focus || value.length > 0}
          duration={150}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
        />
      </div>
      <Button
        size="sm"
        className="absolute right-2 top-1/2 w-24 -translate-y-1/2 rounded-sm px-0 font-semibold text-gray-100"
      >
        Generate
      </Button>
    </label>
  );
}
