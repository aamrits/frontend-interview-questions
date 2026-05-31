import Link from "next/link";
import { CodeDemo } from "@/components/animate-code";
import { ModeToggle } from "@/components/ModeToggle";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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
  return (
    <div className="relative">
      {/* Star Background */}
      <div className="absolute inset-0">
        <GravityStarsBackground
          starsCount={300}
          mouseGravity="attract"
          mouseInfluence={75}
          movementSpeed={0.4}
          starsSize={1}
        />
      </div>

      {/* Top Navigation */}
      <header className="border-b z-10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="w-12" />

          <h1 className="text-xl font-bold">
            Frontend Interview Questions
          </h1>

          <ModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-screen px-6 py-12 h-[80vh] flex items-center justify-center">
        <div className="grid items-center gap-12 lg:grid-cols-[2fr_2fr]">
          {/* Left Side */}
          <div>
            <CodeDemo
              duration={10000}
              delay={1000}
              writing
              cursor
            />
          </div>

          {/* Right Side */}
          <div className="grid gap-8 sm:grid-cols-2 z-10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                <Card className="w-62.5 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl bg-(--color-green) text-white">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">
                      {item.title}
                    </CardTitle>

                    <CardDescription className="mt-1 text-white/90">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    Open Questions →
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