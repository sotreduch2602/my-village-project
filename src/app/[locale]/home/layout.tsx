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
      <div className="main-layout bg-linear-to-br from-slate-50 to-slate-100">
        <HomeHeader className="shadow-sm" lang={locale} />
      </div>
      <div className="pt-16">{children}</div>
    </main>
  );
}
