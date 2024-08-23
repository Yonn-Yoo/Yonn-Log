'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose xl:prose-lg max-w-none text-text3 w-full prose-h1:text-text1 prose-h2:text-text1 prose-code:text-teal-700 prose-strong:text-text2 prose-p:text-text3 prose-a:text-text1"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              style={materialDark}
              {...rest}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="max-h-60 w-full object-cover"
            src={image.src || ''}
            alt={image.alt || ''}
            width={400}
            height={200}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
