"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Truck, ShieldCheck, Leaf, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FDFAF5]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-green-200/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="relative z-10">
            <Badge
              variant="outline"
              className="mb-5 rounded-full border-amber-800/20 bg-amber-50/80 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[1.5px] text-amber-800"
            >
              <Leaf className="mr-1.5 size-3.5 text-green-700" />
              ১০০% খাঁটি ও প্রাকৃতিক
            </Badge>

            <h1 className="mb-6 text-4xl font-bold leading-[1.15] text-amber-950 md:text-5xl lg:text-[56px]">
              কাশ্মীর থেকে আপনার
              <br />
              <span className="text-green-700">রান্নাঘরে</span> সরাসরি
            </h1>

            <p className="mb-8 max-w-[480px] text-base leading-relaxed text-amber-900/60 md:text-lg">
              খাঁটি কাশ্মীরি মশলা, প্রিমিয়াম বাদাম, ড্রাই ফ্রুটস এবং অর্গানিক
              খাবার — সরাসরি কাশ্মীর থেকে আপনার দোরগোড়ায়। স্বাদে ও মানে
              অতুলনীয়।
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-gradient-to-r from-green-700 to-green-800 px-8 text-[15px] text-white shadow-lg transition-all hover:from-green-800 hover:to-green-900 hover:shadow-xl"
              >
                <a href="#products">
                  পণ্য দেখুন
                  <ArrowRight className="size-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 rounded-full border-amber-800/20 px-8 text-[15px] text-amber-900 hover:bg-amber-50"
              >
                <a href="#contact">যোগাযোগ করুন</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8">
              {[
                { icon: Truck, text: "সারাদেশে ডেলিভারি" },
                { icon: ShieldCheck, text: "মানের নিশ্চয়তা" },
                { icon: Star, text: "৫০০+ সন্তুষ্ট ক্রেতা" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-sm text-amber-900/55"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                    <item.icon className="size-4 text-green-700" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Big Image */}
          <div className="relative z-10">
            <Card className="overflow-hidden rounded-[2rem] border-amber-100 bg-white/70 p-2 shadow-[0_20px_70px_rgba(80,50,20,0.12)] backdrop-blur">
              <CardContent className="p-0">
                <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-[1.6rem] bg-amber-50 lg:max-h-[430px]">
                  <Image
                    src="/images/product/image-14.webp"
                    alt="খাঁটি কাশ্মীরি মশলার কালেকশন"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-amber-100 bg-white px-5 py-2.5 shadow-lg">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="whitespace-nowrap text-sm font-semibold text-amber-950">
                প্রিমিয়াম কাশ্মীরি মশলা
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
    </section>
  );
}
