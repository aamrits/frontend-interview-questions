"use client";

import { useState, useEffect } from "react";

import Accordion from "./Accordion";
import QuestionNavigation from "./QuestionNavigation";

interface Props {
    questions: Array<{
        id: string;
        question: string;
        answer: string;
    }>
}

export default function QuestionViewer({
    questions,
}: Props) {
    const [openItem, setOpenItem] = useState<string>("");

    useEffect(() => {
        if (!openItem) return;

        setTimeout(() => {
            document
                .getElementById(openItem)
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 200);
    }, [openItem]);

    return (
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div className="hidden lg:block">
                <QuestionNavigation
                    questions={questions}
                    onSelect={(id) =>
                        setOpenItem(id)
                    }
                />
            </div>

            <Accordion
                items={questions}
                openItem={openItem}
                onOpenChange={setOpenItem}
            />
        </div>
    );
}
