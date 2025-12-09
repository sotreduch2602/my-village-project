import React from "react";

export default function NewsDetail({
  title,
  content,
}: {
  title: string;
  content?: string;
}) {
  return (
    <article>
      <h1>{title}</h1>
      {content && <div>{content}</div>}
    </article>
  );
}
