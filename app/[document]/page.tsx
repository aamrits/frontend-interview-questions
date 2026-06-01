import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navigation from "@/components/Navigation";
import QuestionViewer from "@/components/QuestionViewer";
import { ModeToggle } from "@/components/ModeToggle";

import { parseMarkdownToQuestions } from "@/lib/parseMarkdown";
import { navigation } from "@/lib/navigation";
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

    const documentExists = navigation.some(
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

    return (
        <div className="relative z-10 mx-auto max-w-7xl p-6">
            <div id="navigation-links" className="flex justify-between align-middle mb-6">
                <div id="left-header">
                    <Navigation currentDocument={document} />
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="flex items-center justify-center rounded-md border border-[rgba(0,0,0,0.1)] px-2 py-1.5 hover:bg-accent bg-background"
                    >
                        <House className="h-5 w-5" />
                    </Link>
                    <div className="hidden md:block">
                        <ModeToggle />
                    </div>
                </div>
            </div>

            <QuestionViewer
                questions={questions}
            />
        </div>
    );
}
