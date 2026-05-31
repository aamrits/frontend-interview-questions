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
        <div className="grid grid-cols-[320px_1fr] gap-8">
            <QuestionNavigation
                questions={questions}
                onSelect={(id) =>
                    setOpenItem(id)
                }
            />

            <Accordion
                items={questions}
                openItem={openItem}
                onOpenChange={setOpenItem}
            />
        </div>
    );
}
