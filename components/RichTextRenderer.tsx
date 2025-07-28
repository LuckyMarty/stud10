"use client";

import { FC } from "react";

interface RichTextBlock {
  type: string;
  children: { type: string; text: string }[];
}

interface RichTextRendererProps {
  content: RichTextBlock[];
}

const RichTextRenderer: FC<RichTextRendererProps> = ({ content }) => {
  if (!Array.isArray(content)) return null;

  return (
    <div>
      {content.map((block, index) => {
        const text = block.children?.map((c) => c.text).join(" ") || "";

        switch (block.type) {
          case "heading":
            return <h2 key={index}>{text}</h2>;
          case "paragraph":
            return <p key={index}>{text}</p>;
          case "list":
            return (
              <ul key={index}>
                {block.children.map((c, i) => (
                  <li key={i}>{c.text}</li>
                ))}
              </ul>
            );
          default:
            return <p key={index}>{text}</p>;
        }
      })}
    </div>
  );
};

export default RichTextRenderer;
