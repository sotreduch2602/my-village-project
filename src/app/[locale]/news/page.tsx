import React from "react";

export default function NewsPage({ params }: { params: { locale: string } }) {
  return (
    <section>
      <h1>News - {params.locale}</h1>
      <p>News listing will go here.</p>
    </section>
  );
}
