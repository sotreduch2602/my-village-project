import React from "react";

export default async function PromotionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Headers /> */}
      <main>{children}</main>
    </>
  );
}
