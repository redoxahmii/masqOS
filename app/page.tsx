import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      {/* <section> */}
      {/*   <Performance /> */}
      {/* </section> */}
      <section>
        <Footer />
      </section>
    </>
  );
}
