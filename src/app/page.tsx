import Home from "@/components/Home";
import Header from "@/components/Header";
import About from "@/components/About";
import Features from "@/components/Features";
import Solution from "@/components/Solution";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <main className="w-full max-w-[1440px] m-auto flex flex-col gap-14">
      <Header />
      <Home />
      <About />
      <Features />
      <Solution />
      <Footer />
    </main>
  );
}
