"use client";

import Image from "next/image";
import { Check, Minus, Plus, ShoppingBag, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "../context/cart-context";

const products = [
  {
    id: 1,
    title: "কাশ্মীরি শাহী মসলা",
    description:
      "খাঁটি কাশ্মীরি মসলার বিশেষ ব্লেন্ড, রান্নায় এনে দেবে অসাধারণ স্বাদ ও সুগন্ধ।",
    image: "/images/product/image-15.jpeg",
    oldPrice: 350,
    price: 220,
  },
  {
    id: 2,
    title: "প্রিমিয়াম কাজুবাদাম",
    description:
      "ফ্রেশ ও ক্রাঞ্চি প্রিমিয়াম মানের কাজুবাদাম, স্বাস্থ্যকর স্ন্যাকসের জন্য পারফেক্ট।",
    image: "/images/product/image-14.jpeg",
    oldPrice: 1200,
    price: 980,
  },
  {
    id: 3,
    title: "প্রিমিয়াম ড্রাই এপ্রিকট",
    description: "মিষ্টি ও নরম প্রিমিয়াম এপ্রিকট, ভিটামিন ও পুষ্টিগুণে ভরপুর।",
    image: "/images/product/image-13.jpeg",
    oldPrice: 950,
    price: 780,
  },
  {
    id: 4,
    title: "কালো কিশমিশ",
    description:
      "খাঁটি ও মিষ্টি কালো কিশমিশ, ডেজার্ট ও স্বাস্থ্যকর খাবারের জন্য আদর্শ।",
    image: "/images/product/image-12.jpeg",
    oldPrice: 650,
    price: 520,
  },
  {
    id: 5,
    title: "গোল্ডেন কিশমিশ",
    description:
      "প্রিমিয়াম মানের গোল্ডেন কিশমিশ, স্বাদে মিষ্টি ও দেখতে আকর্ষণীয়।",
    image: "/images/product/image-11.jpeg",
    oldPrice: 700,
    price: 560,
  },
  {
    id: 6,
    title: "সবুজ কিশমিশ",
    description:
      "সফট ও জুসি সবুজ কিশমিশ, পুষ্টিগুণে সমৃদ্ধ স্বাস্থ্যকর ড্রাই ফ্রুট।",
    image: "/images/product/image-10.jpeg",
    oldPrice: 780,
    price: 620,
  },
  {
    id: 7,
    title: "প্রিমিয়াম চিনাবাদাম",
    description:
      "ভাজা ও ফ্রেশ চিনাবাদাম, স্ন্যাকস ও বিভিন্ন খাবারে ব্যবহারের জন্য উপযোগী।",
    image: "/images/product/image-9.jpeg",
    oldPrice: 320,
    price: 240,
  },
  {
    id: 8,
    title: "আখরোট",
    description:
      "বাছাইকৃত প্রিমিয়াম আখরোট, মস্তিষ্ক ও স্বাস্থ্যের জন্য অত্যন্ত উপকারী।",
    image: "/images/product/image-8.jpeg",
    oldPrice: 1450,
    price: 1250,
  },
  {
    id: 9,
    title: "আলমন্ড বাদাম",
    description:
      "খাঁটি ও পুষ্টিকর আলমন্ড বাদাম, প্রতিদিনের স্বাস্থ্যকর ডায়েটের জন্য উপযুক্ত।",
    image: "/images/product/image-7.jpeg",
    oldPrice: 1350,
    price: 1120,
  },
  {
    id: 10,
    title: "মিক্সড ড্রাই ফ্রুটস",
    description:
      "কাজু, কিশমিশ, কুমড়ার বিচি ও বিভিন্ন বাদামের স্বাস্থ্যকর মিক্স।",
    image: "/images/product/image-6.jpeg",
    oldPrice: 1600,
    price: 1380,
  },
  {
    id: 11,
    title: "প্রিমিয়াম পেস্তা",
    description:
      "ফ্রেশ ও সুস্বাদু পেস্তা বাদাম, প্রিমিয়াম কোয়ালিটির স্পেশাল কালেকশন।",
    image: "/images/product/image-5.jpeg",
    oldPrice: 1850,
    price: 1590,
  },
  {
    id: 12,
    title: "মিক্সড শাহী মসলা",
    description:
      "এলাচ, দারুচিনি, গোলমরিচসহ বিভিন্ন শাহী মসলার প্রিমিয়াম ব্লেন্ড।",
    image: "/images/product/image-4.jpeg",
    oldPrice: 520,
    price: 390,
  },
  {
    id: 13,
    title: "প্রিমিয়াম ডাল ও শস্য",
    description: "বিভিন্ন ধরনের স্বাস্থ্যকর ডাল ও শস্যের বাছাইকৃত কালেকশন।",
    image: "/images/product/image-3.jpeg",
    oldPrice: 480,
    price: 360,
  },
  {
    id: 14,
    title: "খোসামুক্ত পেস্তা",
    description:
      "প্রিমিয়াম মানের খোসামুক্ত পেস্তা, ডেজার্ট ও স্ন্যাকসের জন্য পারফেক্ট।",
    image: "/images/product/image-2.jpeg",
    oldPrice: 2100,
    price: 1790,
  },
  {
    id: 15,
    title: "মদিনা খেজুর",
    description: "নরম, মিষ্টি ও প্রাকৃতিক স্বাদের প্রিমিয়াম মানের খেজুর।",
    image: "/images/product/image-1.jpeg",
    oldPrice: 1100,
    price: 890,
  },
  {
    id: 16,
    title: "প্রিমিয়াম পেস্তা",
    description:
      "ফ্রেশ ও ক্রাঞ্চি প্রিমিয়াম মানের পেস্তা বাদাম, স্বাস্থ্যকর ও সুস্বাদু স্ন্যাকস।",
    image: "/images/product/product-16.jpeg",
    oldPrice: 2100,
    price: 1850,
  },
  {
    id: 17,
    title: "খোসামুক্ত পেস্তা",
    description:
      "বাছাইকৃত খোসামুক্ত পেস্তা, ডেজার্ট ও প্রিমিয়াম খাবারের জন্য পারফেক্ট।",
    image: "/images/product/product-17.jpeg",
    oldPrice: 2400,
    price: 2150,
  },
  {
    id: 18,
    title: "প্রিমিয়াম আলমন্ড",
    description:
      "পুষ্টিগুণে ভরপুর খাঁটি আলমন্ড বাদাম, প্রতিদিনের স্বাস্থ্যকর খাদ্যের জন্য আদর্শ।",
    image: "/images/product/product-18.jpeg",
    oldPrice: 1450,
    price: 1250,
  },
  {
    id: 19,
    title: "আজওয়া খেজুর",
    description: "সৌদি আরবের প্রিমিয়াম আজওয়া খেজুর, নরম, মিষ্টি ও পুষ্টিকর।",
    image: "/images/product/product-19.jpeg",
    oldPrice: 1800,
    price: 1550,
  },
  {
    id: 20,
    title: "ডাবাস খেজুর",
    description:
      "সফট ও জুসি ডাবাস খেজুর, প্রাকৃতিক মিষ্টতা ও শক্তির দারুণ উৎস।",
    image: "/images/product/product-20.jpeg",
    oldPrice: 1350,
    price: 1120,
  },
  {
    id: 21,
    title: "কালো খেজুর",
    description:
      "খাঁটি কালো খেজুর, স্বাদে মিষ্টি ও স্বাস্থ্যগুণে সমৃদ্ধ প্রিমিয়াম কালেকশন।",
    image: "/images/product/product-21.jpeg",
    oldPrice: 1600,
    price: 1380,
  },
  {
    id: 22,
    title: "লবঙ্গ",
    description:
      "খাঁটি ও সুগন্ধি লবঙ্গ, রান্না ও স্বাস্থ্যকর পানীয়ের জন্য উপযোগী।",
    image: "/images/product/product-22.jpeg",
    oldPrice: 480,
    price: 360,
  },
  {
    id: 23,
    title: "মিক্সড শাহী মসলা",
    description:
      "এলাচ, দারুচিনি, লবঙ্গসহ বিভিন্ন প্রিমিয়াম মসলার বিশেষ ব্লেন্ড।",
    image: "/images/product/product-23.jpeg",
    oldPrice: 650,
    price: 520,
  },
];

export default function FeaturedProductsSection() {
  const { isSelected, toggleItem, items, increaseQty, decreaseQty } = useCart();

  const getQuantity = (id: number) => {
    return items.find((item) => item.id === id)?.quantity || 1;
  };

  return (
    <section className="bg-white py-16 lg:py-24" id="products">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-green-200 bg-green-50 px-4 py-1.5 text-[11px] font-semibold text-green-800 sm:text-xs"
          >
            <Sparkles className="mr-1.5 size-3.5" />
            বেস্ট সেলার
          </Badge>

          <h2 className="text-2xl font-bold leading-tight text-amber-950 sm:text-3xl md:text-5xl">
            পছন্দের পণ্য নির্বাচন করুন
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-amber-900/65 sm:text-base md:text-lg">
            পণ্য select করলে quantity বাড়ানো-কমানোর option দেখা যাবে এবং cart-এ
            total হিসাব দেখাবে।
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            const selected = isSelected(product.id);
            const quantity = getQuantity(product.id);

            return (
              <Card
                key={product.id}
                className={`overflow-hidden rounded-[1.3rem] bg-white transition-all duration-300 ${
                  selected
                    ? "border-2 border-green-600 shadow-lg shadow-green-100"
                    : "border border-amber-100 shadow-sm hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <CardContent className="p-0">
                  <div className="relative h-[130px] overflow-hidden sm:h-[190px] md:h-[230px]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {selected && (
                      <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-green-600 px-2 py-1 text-[10px] font-semibold text-white sm:left-4 sm:top-4 sm:px-3 sm:text-sm">
                        <Check className="size-3 sm:size-4" />
                        নির্বাচিত
                      </div>
                    )}
                  </div>

                  <div className="p-3 text-center sm:p-5 md:p-6">
                    <h3 className="mb-2 text-base font-bold leading-snug text-green-950 sm:text-xl md:text-2xl">
                      {product.title}
                    </h3>

                    <p className="mb-3 min-h-[58px] text-[12px] leading-relaxed text-amber-900/65 sm:text-sm md:text-base">
                      {product.description}
                    </p>

                    <div className="mb-4 flex items-center justify-center gap-2 sm:gap-3">
                      <span className="text-[11px] text-amber-900/45 line-through sm:text-sm">
                        ৳{product.oldPrice}
                      </span>
                      <span className="text-2xl font-bold text-green-700 sm:text-3xl">
                        ৳{product.price}
                      </span>
                    </div>

                    <Separator className="mb-4 bg-amber-100" />

                    <Button
                      type="button"
                      variant={selected ? "default" : "outline"}
                      onClick={() => toggleItem(product)}
                      className={`h-10 w-full rounded-xl text-[13px] font-bold sm:h-12 sm:text-base ${
                        selected
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "border-green-300 text-green-900 hover:bg-green-50"
                      }`}
                    >
                      {selected ? (
                        <>
                          <Check className="size-4" />
                          নির্বাচিত
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="size-4" />
                          নির্বাচন করুন
                        </>
                      )}
                    </Button>

                    {selected && (
                      <div className="mt-4 flex items-center justify-center gap-3 sm:gap-6">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => decreaseQty(product.id)}
                          className="h-8 w-8 rounded-xl border-green-300 text-green-900 sm:h-10 sm:w-10"
                        >
                          <Minus className="size-3.5 sm:size-4" />
                        </Button>

                        <span className="min-w-6 text-base font-bold text-green-950 sm:min-w-8 sm:text-xl">
                          {quantity}
                        </span>

                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => increaseQty(product.id)}
                          className="h-8 w-8 rounded-xl border-green-300 text-green-900 sm:h-10 sm:w-10"
                        >
                          <Plus className="size-3.5 sm:size-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
