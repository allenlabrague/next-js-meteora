import SmoothScroll from "@/components/SmoothScroll";
import { Footer, Header, Navbar, Section, Testimonials } from "@/container";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-custom text-white">
        <Navbar />
        <Header />
        <Section />
        <Testimonials />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
