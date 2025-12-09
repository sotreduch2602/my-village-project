"use client";

import { useParams } from "next/navigation";

export default function LocaleRootPage() {
  const { locale } = useParams<{ locale: string }>();

  return <div>{locale}</div>;
}
