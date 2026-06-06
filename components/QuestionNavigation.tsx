"use client";

interface Question {
    id: string;
    question: string;
}

interface Props {
    questions: Array<Question>;
    onSelect: (id: string) => void;
}

export default function QuestionNavigation({
    questions,
    onSelect,
}: Props) {
    return (
        <div className="mb-6 rounded-lg border p-4 h-[65vh] overflow-y-auto">
            <h2 className="mb-4 text-lg font-semibold">
                Questions ({questions.length})
            </h2>

            <div className="flex flex-col gap-2 sticky top-4">
                {questions.map((q, index) => (
                    <button
                        key={`${q.id}-${index}`}
                        onClick={() => {
                            onSelect(q.id);
                        }}
                        className="rounded-md px-1 py-1 text-left hover:bg-muted hover:text-primary"
                    >
                        {q.question}
                    </button>
                ))}
            </div>
        </div>
    );
}