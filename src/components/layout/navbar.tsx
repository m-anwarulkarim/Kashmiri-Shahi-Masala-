"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa6";
import {
  ArrowRight,
  Mail,
  Menu,
  Minus,
  Phone,
  Plus,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "../context/cart-context";

const C = {
  phone: "+880 1XXX-XXXXXX",
  email: "info@kashmirimasala.com",
  wa: "8801XXXXXXXXX",
  fb: "https://facebook.com/KashmiriShahiMasala",
  ig: "https://instagram.com/kashmirimasala",
  yt: "https://youtube.com/@kashmirimasala",
};

const NAV = [
  { l: "হোম", h: "/" },
  { l: "আমাদের সম্পর্কে", h: "/about" },
  { l: "পণ্যসমূহ", h: "/#products" },
  { l: "রিভিউ", h: "#reviews" },
  { l: "যোগাযোগ", h: "#contact" },
];

const SOCIALS = [
  { Icon: FaFacebook, href: C.fb },
  { Icon: FaInstagram, href: C.ig },
  { Icon: FaYoutube, href: C.yt },
];

const ExtLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);

export default function Navbar() {
  const [topVis, setTopVis] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const {
    items,
    totalItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  useEffect(() => {
    const fn = () => {
      setTopVis(window.scrollY < 50);
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <div
        className={`relative z-[100] bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-[13px] text-amber-100 transition-all duration-300 ${
          topVis ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <div className="hidden items-center gap-3 md:flex">
            {SOCIALS.map((s, i) => (
              <ExtLink
                key={i}
                href={s.href}
                className="text-amber-200/80 transition-all hover:scale-110 hover:text-white"
              >
                <s.Icon className="size-4" />
              </ExtLink>
            ))}
          </div>

          <p className="flex-1 text-center text-[11px] uppercase tracking-[1.5px] text-amber-100/90 md:flex-none md:text-[13px] md:tracking-[2px]">
            ✦ সরাসরি কাশ্মীর থেকে খাঁটি মশলা ও ড্রাই ফ্রুটস ✦
          </p>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${C.phone}`}
              className="text-amber-200/80 hover:text-white"
            >
              <Phone className="size-4" />
            </a>
            <a
              href={`mailto:${C.email}`}
              className="text-amber-200/80 hover:text-white"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-[99] border-b bg-[#FDFAF5]/[0.97] backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-amber-900/10 shadow-[0_2px_20px_rgba(80,50,20,0.06)]"
            : "border-amber-900/5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/logo.jpeg"
              alt="KSM"
              width={48}
              height={48}
              className="shrink-0 rounded-lg object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold leading-tight text-amber-950">
                Kashmiri Shahi
              </div>
              <div className="text-[11px] font-medium uppercase tracking-[3px] text-amber-700/70">
                Masala & Organic Food
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.h}
                href={n.h}
                className="rounded-lg px-4 py-2 text-[14.5px] font-medium text-amber-950/80 no-underline transition-all hover:bg-amber-900/5 hover:text-amber-700"
              >
                {n.l}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <CartSheet
              totalItems={totalItems}
              totalPrice={totalPrice}
              items={items}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-amber-950"
                  >
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[300px] bg-[#FDFAF5] p-6"
                >
                  <div className="mb-8 mt-2">
                    <div className="text-2xl font-bold text-amber-950">KSM</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-[2.5px] text-amber-700/60">
                      Kashmiri Shahi Masala
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {NAV.map((n) => (
                      <SheetClose asChild key={n.h}>
                        <Link
                          href={n.h}
                          className="border-b border-amber-900/10 py-3.5 text-base font-medium text-amber-950 no-underline transition-colors hover:text-amber-700"
                        >
                          {n.l}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

type CartSheetProps = {
  totalItems: number;
  totalPrice: number;
  items: ReturnType<typeof useCart>["items"];
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
};

function CartSheet({
  totalItems,
  totalPrice,
  items,
  increaseQty,
  decreaseQty,
  removeItem,
}: CartSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="relative gap-1 rounded-full bg-white px-3 text-amber-950 shadow-sm hover:bg-green-50"
        >
          <span className="hidden text-sm font-semibold sm:inline">অর্ডার</span>
          <ArrowRight className="size-4 animate-[wiggle_1.3s_ease-in-out_infinite]" />
          <ShoppingCart className="size-6 animate-[cart-bounce_1.2s_ease-in-out_infinite]" />

          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-700 px-1 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-[340px] flex-col bg-[#FDFAF5] p-0 sm:w-[420px]"
      >
        <SheetHeader className="border-b border-amber-100 p-5 text-left">
          <SheetTitle className="text-2xl font-bold text-amber-950">
            আপনার অর্ডার
          </SheetTitle>
          <p className="text-sm text-amber-900/60">
            নির্বাচিত পণ্য, quantity এবং total হিসাব
          </p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingCart className="mb-4 size-12 text-amber-700/30" />
              <h3 className="text-lg font-bold text-amber-950">
                এখনো কোনো পণ্য নির্বাচন করা হয়নি
              </h3>
              <p className="mt-2 text-sm text-amber-900/60">
                পণ্য section থেকে item select করলে এখানে দেখা যাবে।
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-amber-100 bg-white p-3 shadow-sm"
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
                        <h4 className="line-clamp-2 text-sm font-bold text-amber-950">
                          {item.title}
                        </h4>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="rounded-full p-1 text-red-500 hover:bg-red-50"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>

                      <p className="mt-1 text-sm font-bold text-green-700">
                        ৳{item.price} × {item.quantity}
                      </p>

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
            </div>
          )}
        </div>

        <div className="border-t border-amber-100 bg-white p-5">
          <div className="mb-4 space-y-2">
            <div className="flex items-center justify-between text-sm text-amber-900/70">
              <span>মোট পণ্য</span>
              <span>{totalItems} টি</span>
            </div>

            <Separator />

            <div className="flex items-center justify-between text-xl font-bold text-amber-950">
              <span>সর্বমোট</span>
              <span className="text-green-700">৳{totalPrice}</span>
            </div>
          </div>

          <Button
            asChild
            disabled={items.length === 0}
            className="h-12 w-full rounded-full bg-gradient-to-r from-green-700 to-green-800 font-bold text-white hover:from-green-800 hover:to-green-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Link href="/order">অর্ডার করুন</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
