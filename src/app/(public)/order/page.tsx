"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { useCart } from "@/components/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const DELIVERY_CHARGE = 80;

export default function OrderPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    items,
    totalItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  const grandTotal = totalPrice + DELIVERY_CHARGE;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (items.length === 0) {
      toast.error("দয়া করে অন্তত একটি পণ্য নির্বাচন করুন");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const orderData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      note: formData.get("note"),
      products: items
        .map(
          (item) =>
            `${item.title} x ${item.quantity} = ৳${item.price * item.quantity}`,
        )
        .join(", "),
      deliveryCharge: DELIVERY_CHARGE,
      total: grandTotal,
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(
          result.message || "অর্ডার সাবমিট করা যায়নি। আবার চেষ্টা করুন",
        );

        setIsSubmitting(false);
        return;
      }

      toast.success("অর্ডার সফলভাবে সাবমিট হয়েছে");

      setTimeout(() => {
        router.push("/thank-you");
      }, 1200);
    } catch (error) {
      console.error(error);

      toast.error(
        "সার্ভারের সাথে সংযোগ করা যাচ্ছে না। ইন্টারনেট বা Google Sheet configuration check করুন",
      );

      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFAF5] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
        >
          <ArrowLeft className="size-4" />
          হোমে ফিরে যান
        </Link>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-amber-950 md:text-5xl">
            অর্ডার করুন
          </h1>

          <p className="mt-3 text-amber-900/65">
            আপনার তথ্য দিন, আমরা দ্রুত যোগাযোগ করবো।
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_430px]">
          {/* Form */}
          <Card className="rounded-3xl border-amber-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-950">
                কাস্টমার তথ্য
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">আপনার নাম *</Label>

                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="আপনার নাম লিখুন"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">ফোন নম্বর *</Label>

                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">পূর্ণ ঠিকানা *</Label>

                  <Textarea
                    id="address"
                    name="address"
                    required
                    placeholder="বাসা/রোড/এলাকা সহ পূর্ণ ঠিকানা লিখুন"
                    className="min-h-28"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">অর্ডার নোট</Label>

                  <Textarea
                    id="note"
                    name="note"
                    placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন"
                    className="min-h-24"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={items.length === 0 || isSubmitting}
                  className="h-12 w-full rounded-full bg-green-700 text-base font-bold text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "অর্ডার সাবমিট হচ্ছে..."
                    : "অর্ডার সাবমিট করুন"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="sticky top-24 h-fit rounded-3xl border-amber-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-950">
                অর্ডার সামারি
              </CardTitle>
            </CardHeader>

            <CardContent>
              {items.length === 0 ? (
                <div className="rounded-2xl bg-amber-50 p-6 text-center">
                  <p className="font-semibold text-amber-950">
                    কোনো পণ্য নির্বাচন করা হয়নি
                  </p>

                  <Link
                    href="/#products"
                    className="mt-3 inline-block text-sm font-bold text-green-700"
                  >
                    পণ্য নির্বাচন করুন
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-amber-100 bg-[#fffdf9] p-3 shadow-sm"
                    >
                      <div className="flex gap-3">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-amber-50">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="line-clamp-2 text-sm font-bold leading-snug text-amber-950">
                              {item.title}
                            </h3>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="rounded-full p-1 text-red-500 hover:bg-red-50"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>

                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-sm font-bold text-green-700">
                              ৳{item.price}
                            </span>

                            <span className="text-xs text-amber-900/50">
                              × {item.quantity}
                            </span>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => decreaseQty(item.id)}
                                className="h-8 w-8 rounded-lg border-green-200"
                              >
                                <Minus className="size-3.5" />
                              </Button>

                              <span className="min-w-6 text-center font-bold text-amber-950">
                                {item.quantity}
                              </span>

                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => increaseQty(item.id)}
                                className="h-8 w-8 rounded-lg border-green-200"
                              >
                                <Plus className="size-3.5" />
                              </Button>
                            </div>

                            <span className="text-sm font-bold text-amber-950">
                              ৳{item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Total */}
                  <div className="rounded-2xl bg-amber-50 p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-amber-900/70">
                        <span>মোট পণ্য</span>
                        <span>{totalItems} টি</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-amber-900/70">
                        <span>পণ্যের মূল্য</span>
                        <span>৳{totalPrice}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-amber-900/70">
                        <span>ডেলিভারি চার্জ</span>
                        <span>৳{DELIVERY_CHARGE}</span>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between text-xl font-bold text-amber-950">
                        <span>সর্বমোট</span>

                        <span className="text-2xl text-green-700">
                          ৳{grandTotal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
