"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    name: "রাশেদা আক্তার",
    location: "ঢাকা",
    image: "/images/user/user-1.jpg",
    review:
      "মসলার ঘ্রাণ ও স্বাদ সত্যিই অনেক ভালো। রান্নায় একদম আলাদা একটা ফ্লেভার আসে।",
  },
  {
    name: "সাব্বির হোসেন",
    location: "চট্টগ্রাম",
    image: "/images/user/user-1.jpg",
    review:
      "বাদাম ও ড্রাই ফ্রুটস খুবই ফ্রেশ ছিল। প্যাকেজিংও সুন্দর এবং ডেলিভারিও দ্রুত পেয়েছি।",
  },
  {
    name: "নুসরাত জাহান",
    location: "সিলেট",
    image: "/images/user/user-1.jpg",
    review:
      "কাশ্মীরি মশলা আগে অনেক জায়গা থেকে নিয়েছি, কিন্তু এইটার মান সবচেয়ে ভালো লেগেছে।",
  },
  {
    name: "ইমরান মাহমুদ",
    location: "রাজশাহী",
    image: "/images/user/user-1.jpg",
    review:
      "পণ্যের quality ভালো, দামও reasonable। আবার অর্ডার করবো ইনশাআল্লাহ।",
  },
  {
    name: "ইমরান মাহমুদ",
    location: "রাজশাহী",
    image: "/images/user/user-1.jpg",
    review:
      "পণ্যের quality ভালো, দামও reasonable। আবার অর্ডার করবো ইনশাআল্লাহ।",
  },
];

export default function ReviewSection() {
  return (
    <section id="reviews" className="bg-[#FFFCF8] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-green-200 bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-800"
          >
            কাস্টমার রিভিউ
          </Badge>

          <h2 className="text-3xl font-bold text-amber-950 md:text-5xl">
            আমাদের ক্রেতারা যা বলেন
          </h2>

          <p className="mt-4 text-amber-900/65 md:text-lg">
            খাঁটি পণ্য, ভালো মান এবং দ্রুত ডেলিভারি নিয়ে ক্রেতাদের অভিজ্ঞতা।
          </p>
        </div>

        {/* Slider */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="h-full rounded-[1.7rem] border-amber-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-4 sm:p-5">
                    {/* Quote */}
                    <Quote className="mb-4 size-7 text-green-700/20" />

                    {/* Stars */}
                    <div className="mb-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="flex-1 text-sm leading-relaxed text-amber-900/70 sm:text-[15px]">
                      “{item.review}”
                    </p>

                    {/* User */}
                    <div className="mt-5 flex items-center gap-3 border-t border-amber-100 pt-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-amber-950">
                          {item.name}
                        </h3>

                        <p className="text-xs text-amber-900/50">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="mt-8 flex justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-amber-200 text-amber-950 hover:bg-amber-50" />

            <CarouselNext className="static translate-y-0 border-amber-200 text-amber-950 hover:bg-amber-50" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
