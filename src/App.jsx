import Nav from "./components/Nav";
import PopularProducts from "./components/PopularProducts";
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
      <section className="padding">SuperQuality</section>
      <section className="padding-x py-10">Service</section>
      <section className="padding">Special offer</section>
      <section className="bg-pale-blue padding">Customer Review</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className="bg-black text-white padding-x padding-t pb-8">
        Footer
      </section>
    </main>
  );
}
