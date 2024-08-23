import AnimatedGradientText from "@/components/AnimatedGradientText";
import AnimatedInput from "@/components/AnimatedInput";
import TypingAnimation from "@/components/TypingAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-background">
      <div className="relative z-10 pt-6 lg:pt-8">
        <header className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between gap-4">
            <div className="size-8 rounded-full bg-primary"></div>
            <div className="flex items-center gap-6">
              <Link
                className="rounded-md border border-muted px-3 py-2 text-sm font-semibold text-gray-100 transition-colors hover:border-primary"
                href="/auth/login"
              >
                Login
              </Link>
              <Link
                className="grid place-content-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-gray-100 transition-colors hover:bg-primary/90"
                href="/auth/signup"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </header>
        <div className="mx-auto mt-28 max-w-5xl">
          <div className="space-y-2">
            <h1 className="text-center text-7xl font-bold text-primary">
              BookPal
            </h1>
            <p className="text-center text-base text-gray-200">
              Discover with AI, Read with Joy.
            </p>
          </div>
          <AnimatedGradientText className="mt-14 text-gray-100">
            Get Personalized Book Recommendations—Try it out!
          </AnimatedGradientText>
          <AnimatedInput />
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </main>
  );
}
