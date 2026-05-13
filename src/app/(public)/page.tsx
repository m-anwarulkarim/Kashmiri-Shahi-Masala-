import HeroSection from "@/components/home/herosection";
import ProductCategorySection from "@/components/home/FeaturedProductsSection";
import React from "react";
import OrderPage from "./order/page";
import ReviewSection from "@/components/home/ReviewSection";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      {/* <AboutSection /> */}
      <ProductCategorySection />
      <ReviewSection />
      <OrderPage />
    </div>
  );
}
