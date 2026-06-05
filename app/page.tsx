"use client"

import { useMemo } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"
import { OrbitingCirclesComponent } from "@/components/orbiting-circles-demo"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Particles } from "@/components/ui/particles"
import { Highlighter } from "@/components/ui/highlighter"
import { AuroraText } from "@/components/ui/aurora-text"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

const navigationItems = [
  {
    title: "React",
    href: "/react-concepts",
    description: "Concepts, Hooks, Rendering, Performance",
  },
  {
    title: "JavaScript",
    href: "/js-concepts",
    description: "Closures, Event Loop, Promises, ES6+",
  },
  {
    title: "HTML",
    href: "/html-questions",
    description: "HTML5, DOM, Storage, Browser Rendering",
  },
  {
    title: "CSS",
    href: "/css-questions",
    description: "Flexbox, Grid, Positioning, Animations",
  },
];

export default function HomePage() {
  const { resolvedTheme } = useTheme()

  const color = useMemo(
    () => (resolvedTheme === "dark" ? "#ffffff" : "#000000"),
    [resolvedTheme]
  );

  return (
    <div className="relative">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color={color}
        refresh
      />

      {/* Top Navigation */}
      <header className="border-b z-10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-center md:justify-between px-6">

          <h1 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
            <AuroraText>Frontend Interview</AuroraText> Questions
          </h1>

          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="block x-auto max-w-screen-2xl px-4 py-2 mt-2 md:px-8 xl:px-12">
        <div className="text-center">
          <h1 className="leading-relaxed text-xl">
            A{" "}
            <Highlighter action="underline" color="#FF9800">
              curated list
            </Highlighter>{" "}
            of {" "}{" "}
            <Highlighter action="highlight" color="#87CEFA">
              frontend
            </Highlighter>{" "}
            interview questions {" "}
          </h1>
        </div>
      </div>
      <section className="x-auto max-w-screen-2xl px-4 py-2 mt-8 md:px-8 xl:px-12 h-[70vh] flex items-center justify-center">

        <div className="grid items-center gap-8 xl:grid-cols-[2fr_2fr]">
          {/* Left Side */}
          <div className="hidden xl:block">
            <div className="relative h-125 w-full overflow-hidden">
              <OrbitingCirclesComponent />
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 z-10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                <Card className="w-62.5 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl bg-(--color-red) text-white">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">
                      {item.title}
                    </CardTitle>

                    <CardDescription className="mt-1 text-white/90">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <InteractiveHoverButton className="bg-transparent">Questions</InteractiveHoverButton>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}