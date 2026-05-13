"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, ArrowRight, ChevronUp } from "lucide-react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa6";

const C = {
  phone: "+880 1XXX-XXXXXX",
  email: "info@kashmirimasala.com",
  wa: "8801XXXXXXXXX",
  fb: "https://facebook.com/KashmiriShahiMasala",
  ig: "https://instagram.com/kashmirimasala",
  yt: "https://youtube.com/@kashmirimasala",
  address: "যশোর, খুলনা বিভাগ, বাংলাদেশ",
};

const QUICK = [
  { l: "হোম", h: "#home" },
  { l: "আমাদের সম্পর্কে", h: "#about" },
  { l: "পণ্যসমূহ", h: "#products" },
  { l: "রিভিউ", h: "#reviews" },
  { l: "যোগাযোগ", h: "#contact" },
];

const PRODUCTS = [
  { l: "কাজু বাদাম", h: "#products" },
  { l: "পেস্তা বাদাম", h: "#products" },
  { l: "কাঠবাদাম", h: "#products" },
  { l: "কিশমিশ", h: "#products" },
  { l: "কাশ্মীরি মশলা", h: "#products" },
  { l: "ডাল ও শস্য", h: "#products" },
];

const SOCIALS = [
  { Icon: FaFacebook, href: C.fb, label: "Facebook" },
  { Icon: FaInstagram, href: C.ig, label: "Instagram" },
  { Icon: FaYoutube, href: C.yt, label: "YouTube" },
];

const WaIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative">
      {/* Top wave decoration */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-800/30 to-transparent" />

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-amber-950 to-[#1a0f05] text-amber-200/70">
        {/* Newsletter strip */}
        <div className="border-b border-amber-100/5">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-amber-50 mb-1">
                আমাদের সাথে যুক্ত থাকুন
              </h3>
              <p className="text-sm text-amber-200/50">
                নতুন পণ্য ও অফার সম্পর্কে সবার আগে জানুন
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="আপনার ইমেইল দিন"
                className="bg-amber-900/30 border-amber-100/10 text-amber-100 placeholder:text-amber-200/30 rounded-full px-5 h-11 w-full md:w-72 focus-visible:ring-amber-700/50"
              />
              <Button className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white rounded-full h-11 px-6 shadow-md">
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-3 no-underline mb-5"
              >
                <Image
                  src="/logo.jpeg"
                  alt="KSM"
                  width={44}
                  height={44}
                  className="rounded-lg object-contain"
                />
                <div>
                  <div className="text-lg font-bold text-amber-50 leading-tight">
                    Kashmiri Shahi
                  </div>
                  <div className="text-[10px] tracking-[2.5px] uppercase text-amber-400/50">
                    Masala & Organic Food
                  </div>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-amber-200/45 mb-6 max-w-[280px]">
                সরাসরি কাশ্মীর থেকে সংগৃহীত খাঁটি মশলা, বাদাম, ড্রাই ফ্রুটস ও
                অর্গানিক খাবার। ১০০% প্রাকৃতিক ও বিশুদ্ধ।
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((s, i) => (
                  <ExtLink
                    key={i}
                    href={s.href}
                    className="w-9 h-9 rounded-full border border-amber-100/10 flex items-center justify-center text-amber-200/50 hover:text-amber-50 hover:border-amber-400/30 hover:bg-amber-100/5 transition-all"
                  >
                    <s.Icon className="size-4" />
                  </ExtLink>
                ))}
                <ExtLink
                  href={`https://wa.me/${C.wa}`}
                  className="w-9 h-9 rounded-full border border-amber-100/10 flex items-center justify-center text-amber-200/50 hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/5 transition-all"
                >
                  <WaIcon />
                </ExtLink>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-amber-100 uppercase tracking-[2px] mb-5">
                দ্রুত লিংক
              </h4>
              <ul className="space-y-3">
                {QUICK.map((q) => (
                  <li key={q.h}>
                    <a
                      href={q.h}
                      className="text-sm text-amber-200/45 hover:text-amber-100 transition-colors no-underline inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-700 group-hover:bg-amber-400 transition-colors" />
                      {q.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-semibold text-amber-100 uppercase tracking-[2px] mb-5">
                আমাদের পণ্য
              </h4>
              <ul className="space-y-3">
                {PRODUCTS.map((p) => (
                  <li key={p.l}>
                    <a
                      href={p.h}
                      className="text-sm text-amber-200/45 hover:text-amber-100 transition-colors no-underline inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-700 group-hover:bg-amber-400 transition-colors" />
                      {p.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-amber-100 uppercase tracking-[2px] mb-5">
                যোগাযোগ
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${C.phone}`}
                    className="flex items-start gap-3 text-sm text-amber-200/45 hover:text-amber-100 transition-colors no-underline group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100/5 flex items-center justify-center shrink-0 group-hover:bg-amber-100/10 transition-colors">
                      <Phone className="size-3.5 text-amber-400/60" />
                    </div>
                    <div>
                      <div className="text-[11px] text-amber-200/30 mb-0.5">
                        ফোন
                      </div>
                      <div>{C.phone}</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${C.email}`}
                    className="flex items-start gap-3 text-sm text-amber-200/45 hover:text-amber-100 transition-colors no-underline group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100/5 flex items-center justify-center shrink-0 group-hover:bg-amber-100/10 transition-colors">
                      <Mail className="size-3.5 text-amber-400/60" />
                    </div>
                    <div>
                      <div className="text-[11px] text-amber-200/30 mb-0.5">
                        ইমেইল
                      </div>
                      <div>{C.email}</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-amber-200/45">
                    <div className="w-8 h-8 rounded-lg bg-amber-100/5 flex items-center justify-center shrink-0">
                      <MapPin className="size-3.5 text-amber-400/60" />
                    </div>
                    <div>
                      <div className="text-[11px] text-amber-200/30 mb-0.5">
                        ঠিকানা
                      </div>
                      <div>{C.address}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-amber-100/5">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[12.5px] text-amber-200/30 text-center md:text-left">
              © {new Date().getFullYear()} Kashmiri Shahi Masala। সর্বস্বত্ব
              সংরক্ষিত।
            </p>
            <div className="flex items-center gap-4 text-[12.5px] text-amber-200/30">
              <a
                href="#"
                className="hover:text-amber-200/60 transition-colors no-underline"
              >
                প্রাইভেসি পলিসি
              </a>
              <span className="w-1 h-1 rounded-full bg-amber-200/15" />
              <a
                href="#"
                className="hover:text-amber-200/60 transition-colors no-underline"
              >
                শর্তাবলী
              </a>
              <span className="w-1 h-1 rounded-full bg-amber-200/15" />
              <a
                href="#"
                className="hover:text-amber-200/60 transition-colors no-underline"
              >
                রিফান্ড পলিসি
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-amber-900/90 hover:bg-amber-800 text-amber-100 flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 backdrop-blur-sm border border-amber-100/10"
        aria-label="উপরে যান"
      >
        <ChevronUp className="size-5" />
      </button>
    </footer>
  );
}
