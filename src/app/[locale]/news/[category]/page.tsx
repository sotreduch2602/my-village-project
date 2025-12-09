import React from "react";

export default function NewsCategoryPage({
  params,
}: {
  params: { locale: string; category: string };
}) {
  return (
    <section>
      <h1>News - Category: {params.category}</h1>
      <p>Filtered news for {params.category}</p>
    </section>
  );
}
