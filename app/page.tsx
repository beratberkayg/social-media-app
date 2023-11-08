"use client";
import Hero from "@/components/main/Hero";
import HeroContent from "@/components/main/HeroContent";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const { loginModal } = useAppSelector((state) => state.modal);
  const { registerModal } = useAppSelector((state) => state.modal);
  return (
    <main className="text-white h-screen">
      <Hero />
      <HeroContent />
      {loginModal && <LoginModal />}
      {registerModal && <RegisterModal />}
    </main>
  );
}
