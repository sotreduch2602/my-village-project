import React from "react";

export default function NewsCard({
  title,
  excerpt,
}: {
  title: string;
  excerpt?: string;
}) {
  return (
    <article>
      <h3>{title}</h3>
      {excerpt && <p>{excerpt}</p>}
    </article>
  );
}
