'use client';

import {
  Code,
  CodeBlock,
  CodeHeader,
} from '@/components/animate-ui/components/animate/code';
import { Code2 } from 'lucide-react';

interface CodeDemoProps {
  duration: number;
  delay: number;
  writing: boolean;
  cursor: boolean;
}

export const CodeDemo = ({
  duration,
  delay,
  writing,
  cursor,
}: CodeDemoProps) => {
  return (
    <Code
      key={`${duration}-${delay}-${writing}-${cursor}`}
      className="w-105 h-93 rotate-355"
      code={`'import * as React from 'react';

export default function InterviewPrep() {
  const topics = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'TypeScript',
  ];

  return (
    <div className="space-y-2">
      {topics.map((topic) => (
        <div key={topic}>
          {topic}
        </div>
      ))}
    </div>
  );
}`}
    >
      <CodeHeader icon={Code2} copyButton>
        frontend-interview-questions.tsx
      </CodeHeader>

      <CodeBlock
        cursor={cursor}
        lang="tsx"
        writing={writing}
        duration={duration}
        delay={delay}
      />
    </Code>
  );
};