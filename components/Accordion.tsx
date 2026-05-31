"use client";

import MarkdownRenderer from "./MarkdownRenderer";

import {
    Accordion as ShadcnAccordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface Item {
    id: string;
    question: string;
    answer: string;
}

interface Props {
    items: Item[];
    openItem: string;
    onOpenChange: (value: string) => void;
}

export default function Accordion({
    items,
    openItem,
    onOpenChange,
}: Props) {
    return (
        <ShadcnAccordion
            type="single"
            value={openItem}
            onValueChange={onOpenChange}
            className="w-full border rounded-md h-[80vh] overflow-y-auto"
        >
            {items.map((item, index) => (
                <AccordionItem
                    key={`${item.id}-${index}`}
                    value={item.id}
                    id={item.id}
                    className="border-b px-4 last:border-b-0 mb-2"
                >
                    <AccordionTrigger className="text-lg">
                        {item.question}
                    </AccordionTrigger>

                    <AccordionContent>
                        <MarkdownRenderer
                            content={item.answer}
                        />
                    </AccordionContent>
                </AccordionItem>
            ))}
        </ShadcnAccordion>
    );
}