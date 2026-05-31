import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
    content: string;
}

export default function MarkdownRenderer({
    content,
}: Props) {
    return (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ className, children, ...props }) {
                        const isInline = !className;

                        if (isInline) {
                            return (
                                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
                                    {children}
                                </code>
                            );
                        }

                        return (
                            <pre className="overflow-x-auto rounded-lg bg-black p-4">
                                <code
                                    className={className}
                                    {...props}
                                >
                                    {children}
                                </code>
                            </pre>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown >
        </div >
    );
}
