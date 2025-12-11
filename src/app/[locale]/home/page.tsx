"use client";
import CarouselSlider from "@/components/pages/home/CarouselSlider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HomePage() {
  return (
    <div className="main min-h-screen bg-slate-50">
      <section className="relative w-full flex justify-center">
        <div className="max-w-[2400px] max-h-[800px] w-full relative flex items-center justify-center overflow-hidden">
          <CarouselSlider />

          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

          <div
            id="homepage-searchbar"
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 transition-all duration-300 z-20"
          >
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-100 p-6 space-y-4 relative z-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-end">
                  <div className="flex flex-col w-full gap-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input id="destination" placeholder="Where to?" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <Label htmlFor="checkin">Check-in</Label>
                    <Input id="checkin" type="date" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <Label htmlFor="checkout">Check-out</Label>
                    <Input id="checkout" type="date" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <Label htmlFor="guests">Guests</Label>
                    <Input id="guests" type="number" min={1} defaultValue={1} />
                  </div>
                  <Button
                    size="lg"
                    className="w-full md:w-auto px-8 ali"
                    onClick={() => alert("Search clicked")}
                  >
                    Search stays
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Explore more with M Village
          </h2>
          <p className="text-slate-600">
            Quick placeholder content to verify the section is visible on the
            page.
          </p>
        </div>
      </section>
    </div>
  );
}
