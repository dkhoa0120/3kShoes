import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      id="footer"
      className="max-container gap-32 justify-between flex max-sm:flex-col"
    >
      <div className="flex flex-col gap-3 max-w-sm">
        <img src="./img/footer.PNG" alt="footer" className="w-[200px]" />
        <p className="info-text">
          Established in 1995, our passion and mission for footwear transcends
          mere functionality. It is about making a statement with every step you
          take.
        </p>
        <div className="flex max-w-sm gap-8">
          {socialMedia.map((item) => (
            <img
              src={item.src}
              alt={item.alt}
              key={item.alt}
              className="bg-slate-300 rounded-full w-10 h-10 p-2 flex items-center justify-center"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h2>Brands</h2>
        <div>
          <p className="info-text">Nike</p>
          <p className="info-text">Adidas</p>
          <p className="info-text">Puma</p>
          <p className="info-text">SKC</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h2>Help</h2>
        <div>
          <p className="info-text">About Us</p>
          <p className="info-text">FAQs</p>
          <p className="info-text">How it works</p>
          <p className="info-text">Privacy Policy</p>
          <p className="info-text">Payment Policy</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h2>Get in touch</h2>
        <div>
          <p className="info-text">admin3k@gmail.com</p>
          <p className="info-text">+84 81239771</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
