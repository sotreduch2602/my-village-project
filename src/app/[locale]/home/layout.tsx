import HomeHeader from "@/components/layouts/header";

export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main className="flex flex-col min-h-screen relative">
      <HomeHeader className="shadow-sm" lang={locale} />
      <div className="relative">{children}</div>
    </main>
  );
}
