import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";

export interface QuestionAnswer {
    id: string;
    question: string;
    answer: string;
}

export async function parseMarkdownToQuestions(
    markdown: string
): Promise<QuestionAnswer[]> {
    const answersIndex = markdown.indexOf("## Answers");

    if (answersIndex === -1) {
        return [];
    }

    const answersSection = markdown.slice(answersIndex);

    const tree = unified()
        .use(remarkParse)
        .parse(answersSection);

    const result: QuestionAnswer[] = [];

    let currentId = "";
    let currentQuestion = "";
    let currentNodes: any[] = [];

    const flush = () => {
        if (!currentId || !currentQuestion) {
            return;
        }

        const filteredNodes = currentNodes.filter(
            (node: any) => {
                if (node.type !== "html") {
                    return true;
                }

                const html = node.value.toLowerCase();

                return (
                    !html.includes("back to top") &&
                    !html.includes('href="#"')
                );
            }
        );

        const answer = unified()
            .use(remarkStringify)
            .stringify({
                type: "root",
                children: filteredNodes,
            });

        result.push({
            id: currentId,
            question: currentQuestion,
            answer,
        });
    };

    const children = tree.children;

    let insideQuestion = false;

    for (const node of children) {
        if (
            node.type === "heading" &&
            node.depth === 4
        ) {
            flush();

            insideQuestion = true;

            currentNodes = [];

            currentId = node.children
                .map((c: any) => c.value || "")
                .join("")
                .toLowerCase();

            currentQuestion = "";

            continue;
        }

        if (!insideQuestion) {
            continue;
        }

        if (
            node.type === "heading" &&
            node.depth === 3
        ) {
            currentQuestion = node.children
                .map((c: any) => c.value || "")
                .join("");

            continue;
        }

        currentNodes.push(node);
    }

    flush();

    return result;
}