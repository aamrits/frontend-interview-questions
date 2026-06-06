import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuestionViewer from "@/components/QuestionViewer";
import { ModeToggle } from "@/components/ModeToggle";
import { parseMarkdownToQuestions } from "@/lib/parseMarkdown";
import { technologies } from "@/lib/navigation";
import { House } from 'lucide-react';

interface Props {
    params: Promise<{
        document: string;
    }>;
    openItem: string;
}

export default async function Page({
    params,
}: Props) {
    const { document } = await params;

    const documentExists = technologies.some(
        (item) => item.slug === document
    );

    if (!documentExists) {
        notFound();
    }

    const filePath = path.join(
        process.cwd(),
        "content",
        `${document}.md`
    );

    let markdown = "";

    try {
        markdown = await fs.readFile(filePath, "utf8");
    } catch {
        notFound();
    }

    const questions = await parseMarkdownToQuestions(markdown);

    const currentTechnology = technologies.find(
        (item) => item.slug === document
    );

    if (!currentTechnology) {
        notFound();
    }

    return (
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 md:px-6">
            {/* Hero Section */}
            <div
                className={`mb-8 overflow-hidden rounded-3xl ${currentTechnology.heroGradient} p-6 text-white shadow-lg`}
            >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold md:text-4xl">
                            {currentTechnology.title} Interview Questions
                        </h1>

                        <p className="mt-2 max-w-2xl text-white/90">
                            {currentTechnology.longDescription}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-black shadow-md transition hover:scale-105"
                        >
                            <House className="h-4 w-4" />
                            Home
                        </Link>

                        <div className="hidden md:block">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Pills */}
            <div className="mb-8 flex flex-wrap gap-3">
                {technologies.map((item) => {
                    const isActive = item.slug === document;

                    return (
                        <Link
                            key={item.slug}
                            href={`/${item.slug}`}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition-all
          ${isActive
                                    ? `${item.heroGradient} border shadow-md`
                                    : "border bg-background hover:bg-accent"
                                }`}
                        >
                            {item.navLabel}
                        </Link>
                    );
                })}
            </div>

            {/* Questions */}
            <QuestionViewer
                questions={questions}
            />
        </div>
    );
}
