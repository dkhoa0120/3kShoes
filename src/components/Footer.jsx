import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      id="footer"
      className="max-container gap-20 justify-between flex max-sm:flex-col"
    >
      <div className="flex flex-col gap-3 max-w-sm">
        <img src="./img/footer.PNG" alt="footer" className="w-[200px]" />
        <p className="text-footer">
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
        <h3>Brands</h3>
        <div>
          <p className="text-footer">Nike</p>
          <p className="text-footer">Adidas</p>
          <p className="text-footer">Puma</p>
          <p className="text-footer">SKC</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h3>Help</h3>
        <div>
          <p className="text-footer">About Us</p>
          <p className="text-footer">FAQs</p>
          <p className="text-footer">How it works</p>
          <p className="text-footer">Privacy Policy</p>
          <p className="text-footer">Payment Policy</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h3>Get in touch</h3>
        <div>
          <p className="text-footer">admin3k@gmail.com</p>
          <p className="text-footer">+84 81239771</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
