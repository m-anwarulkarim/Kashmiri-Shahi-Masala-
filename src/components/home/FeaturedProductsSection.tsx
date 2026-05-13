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
      "খাঁটি কাশ্মীরি মশলার বিশেষ মিক্স, রান্নায় আনবে প্রিমিয়াম স্বাদ ও ঘ্রাণ।",
    image: "/images/image-15.jpeg",
    oldPrice: 350,
    price: 220,
  },
  {
    id: 2,
    title: "প্রিমিয়াম বাদাম প্যাকেজ",
    description:
      "কাজু, পেস্তা, আলমন্ড, আখরোটসহ বাছাইকৃত প্রিমিয়াম বাদামের কালেকশন।",
    image: "/images/image-14.jpeg",
    oldPrice: 420,
    price: 310,
  },
  {
    id: 3,
    title: "ড্রাই ফ্রুটস কালেকশন",
    description:
      "কিশমিশ, এপ্রিকট ও বিভিন্ন ড্রাই ফ্রুটসের স্বাস্থ্যকর প্রিমিয়াম প্যাক।",
    image: "/images/image-13.jpeg",
    oldPrice: 450,
    price: 320,
  },
  {
    id: 4,
    title: "প্রিমিয়াম ডাল ও শস্য",
    description:
      "বিভিন্ন ধরনের স্বাস্থ্যকর ডাল, শস্য ও প্রিমিয়াম খাদ্য উপাদান।",
    image: "/images/image-10.jpeg",
    oldPrice: 380,
    price: 260,
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
