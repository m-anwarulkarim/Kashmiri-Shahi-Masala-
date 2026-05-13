"use client";

import Image from "next/image";
import { Leaf, ShieldCheck, MountainSnow, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "১০০% খাঁটি ও প্রাকৃতিক",
    description:
      "কোনো কৃত্রিম রং বা ক্ষতিকর উপাদান ছাড়াই বিশুদ্ধ ও প্রিমিয়াম মানের পণ্য।",
  },
  {
    icon: MountainSnow,
    title: "সরাসরি কাশ্মীর থেকে",
    description:
      "বিশ্বস্ত উৎস থেকে সংগ্রহ করা কাশ্মীরি মশলা, বাদাম ও অর্গানিক খাবার।",
  },
  {
    icon: ShieldCheck,
    title: "মানের নিশ্চয়তা",
    description:
      "প্রতিটি পণ্য বাছাইকৃত এবং সেরা মান নিশ্চিত করেই সরবরাহ করা হয়।",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Background blur */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <Card className="col-span-2 overflow-hidden rounded-[2rem] border-amber-100 shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-[300px] md:h-[380px]">
                    <Image
                      src="/images/image-15.jpeg"
                      alt="কাশ্মীরি মশলা"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Small image 1 */}
              <Card className="overflow-hidden rounded-[1.5rem] border-amber-100 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-[180px]">
                    <Image
                      src="/images/image-14.jpeg"
                      alt="কাশ্মীরি বাদাম"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Small image 2 */}
              <Card className="overflow-hidden rounded-[1.5rem] border-amber-100 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-[180px]">
                    <Image
                      src="/images/image-13.jpeg"
                      alt="ড্রাই ফ্রুটস"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-amber-100 bg-white px-5 py-2.5 shadow-lg">
              <Sparkles className="size-4 text-amber-600" />
              <span className="whitespace-nowrap text-sm font-semibold text-amber-950">
                Premium Kashmiri Collection
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <Badge
              variant="outline"
              className="mb-5 rounded-full border-green-200 bg-green-50 px-4 py-1.5 text-xs font-semibold tracking-[1.5px] text-green-800"
            >
              <Leaf className="mr-1.5 size-3.5" />
              আমাদের সম্পর্কে
            </Badge>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-amber-950 md:text-5xl">
              খাঁটি কাশ্মীরি স্বাদ
              <br />
              <span className="text-green-700">আপনার পরিবারের জন্য</span>
            </h2>

            <p className="mb-6 text-base leading-relaxed text-amber-900/70 md:text-lg">
              Kashmiri Shahi Masala এমন একটি ব্র্যান্ড যেখানে আপনি পাবেন খাঁটি
              কাশ্মীরি মশলা, প্রিমিয়াম বাদাম, ড্রাই ফ্রুটস ও অর্গানিক খাবারের
              সেরা সংগ্রহ। আমরা সরাসরি বিশ্বস্ত উৎস থেকে পণ্য সংগ্রহ করে আপনার
              কাছে পৌঁছে দিই।
            </p>

            <p className="mb-10 text-base leading-relaxed text-amber-900/65">
              আমাদের লক্ষ্য হলো প্রতিটি পরিবারের রান্নাঘরে বিশুদ্ধতা, স্বাদ এবং
              স্বাস্থ্যকর খাবারের নিশ্চয়তা পৌঁছে দেওয়া।
            </p>

            {/* Features */}
            <div className="space-y-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-amber-100 bg-[#FFFCF8] p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100">
                    <item.icon className="size-5 text-green-700" />
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-amber-950">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-amber-900/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
