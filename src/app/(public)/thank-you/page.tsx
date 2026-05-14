"use client";

import Link from "next/link";
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FDFAF5] px-4 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <Card className="overflow-hidden rounded-[2rem] border-amber-100 bg-white shadow-xl">
          <CardContent className="relative p-8 text-center sm:p-12">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-green-100/60 blur-3xl" />
            </div>

            {/* Icon */}
            <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="size-14 text-green-700" />
            </div>

            {/* Heading */}
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-amber-950 sm:text-5xl">
                ধন্যবাদ!
              </h1>

              <p className="mt-4 text-base leading-relaxed text-amber-900/65 sm:text-lg">
                আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।
                <br />
                খুব শীঘ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে।
              </p>
            </div>

            {/* Info Box */}
            <div className="relative z-10 mt-8 rounded-3xl border border-green-100 bg-green-50 p-5 text-left">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white">
                  <ShoppingBag className="size-6 text-green-700" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-amber-950">
                    আপনার অর্ডার এখন প্রসেসিং এ আছে
                  </h2>

                  <p className="mt-1 text-sm leading-relaxed text-amber-900/65">
                    আমাদের প্রতিনিধি আপনার অর্ডার যাচাই করে দ্রুত ডেলিভারির জন্য
                    প্রস্তুত করবে।
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="relative z-10 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-green-700 px-8 text-base font-bold text-white hover:bg-green-800"
              >
                <Link href="/">
                  হোমে ফিরে যান
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-amber-200 px-8 text-base font-bold text-amber-950 hover:bg-amber-50"
              >
                <Link href="/#products">আরো পণ্য দেখুন</Link>
              </Button>
            </div>

            {/* Footer text */}
            <p className="relative z-10 mt-8 text-xs text-amber-900/45 sm:text-sm">
              Kashmiri Shahi Masala — খাঁটি কাশ্মীরি স্বাদ আপনার পরিবারের জন্য
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
