import Hero from "@/components/main/Hero";
import HeroContent from "@/components/main/HeroContent";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 text-white h-screen">
      <Hero />
      <HeroContent />
    </main>
  );
}
