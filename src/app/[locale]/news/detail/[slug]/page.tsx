import React from "react";

export default function NewsDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  return (
    <article>
      <h1>News Detail - {params.slug}</h1>
      <p>News content for {params.slug} will appear here.</p>
    </article>
  );
}
