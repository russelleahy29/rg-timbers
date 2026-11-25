import { AreasCovered } from "@/components/areas-covered";
import { BusinessCta } from "@/components/business-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { QuoteForm } from "@/components/quote-form";
import { RecentWork } from "@/components/recent-work";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <Hero />
      <Services />
      <RecentWork />
      <HowItWorks />
      <BusinessCta />
      <QuoteForm />
      <AreasCovered />
      <SiteFooter />
    </div>
  );
}
