import CusReviews from "./components/CusReviews";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import PopularProducts from "./components/PopularProducts";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import SuperQuality from "./components/SuperQuality";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Welcome />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 mt-2">
        <Services />
      </section>
      <section className="bg-pale-blue padding mt-10">
        <CusReviews />{" "}
      </section>
      <section className="padding mt-10">
        <SpecialOffer />
      </section>
      <section className="bg-black text-white padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
