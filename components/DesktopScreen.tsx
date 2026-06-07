"use client"

import { useMemo } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"
import { OrbitingCirclesComponent } from "@/components/OrbitingCirclesComponent"
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
import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { technologies } from "@/lib/navigation";

export default function DesktopScreen() {
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
                <div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-center md:justify-between">

                    <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl">
                        <AuroraText>Frontend Interview</AuroraText> Questions
                    </h1>

                    <div className="">
                        <ModeToggle />
                    </div>
                </div>
            </header>

            {/* Main Content - Heading */}
            <div className="mx-auto max-w-7xl px-6 py-4">
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

            {/* Main Content */}
            <section className="w-full py-2 mt-8 px-8 h-[70vh]">

                <div className="mx-auto max-w-7xl grid items-center gap-8 md:grid-cols-2">
                    {/* Left Side - Orbiting circles */}
                    <div className="">
                        <div className="relative h-125 w-full overflow-hidden">
                            <OrbitingCirclesComponent />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 z-10">
                        {technologies.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                            >
                                <Card className={`w-62.5 md:w-full cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl text-white ${item.heroGradient}`}>
                                    <CardHeader>
                                        <CardTitle className="text-lg font-bold">
                                            {item.title}
                                        </CardTitle>

                                        <CardDescription className="mt-1 text-white/90 h-[40px]">
                                            {item.shortDescription}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <Button size="lg" variant="outline" className="bg-transparent">
                                            Questions <ArrowUpRightIcon />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-xs text-gray-500 shadow-sm backdrop-blur">
                © {new Date().getFullYear()} Frontend Interview Questions. Built with ❤️ by Amrit
            </footer>
        </div>
    );
}