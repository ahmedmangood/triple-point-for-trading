import { AboutUs, ContactUs, Hero } from "@/components";
import Plans from "@/components/Plans";
import TrySection from "@/components/TrySection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Hompage");

  unstable_setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Hero />
      <TrySection />
      {/* <OurCourses /> */}
      <AboutUs />
      <Plans />
      {/* <FeedBack /> */}
      <ContactUs />
    </main>
  );
}
