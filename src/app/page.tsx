import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import AboutProgram from "@/components/AboutProgram";
import WhySupport from "@/components/WhySupport";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Banner />
      <CallToAction />
      <AboutProgram />
      <WhySupport />
      <HowItWorks />
    </main>
  );
}
