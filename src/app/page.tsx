"use client";

import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Loading from "@/components/loading";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Load theme from local storage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.classList.add(theme);
    }
  }, []);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Hero />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
