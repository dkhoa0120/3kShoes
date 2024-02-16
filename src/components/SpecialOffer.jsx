import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section id="contact-us" className="max-container max-sm:mt-12">
      <div className="flex max-lg:flex-col-reverse gap-10">
        <div>
          <img
            src={offer}
            alt="Shoe Promotion"
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold">Become A Member</h1>
          <h1 className="font-bold">&</h1>
          <h1 className="font-bold">
            Get Nike
            <span className="text-coral-red"> Special</span> Offer
          </h1>
          <p className="info-text lg:max-w-xl mt-3">
            Begin an exciting shopping expedition that revolutionizes your
            experience with unmatched bargains. With top-notch choices and
            extraordinary discounts, we provide unparalleled value that
            distinguishes us from the rest.
          </p>
          <p className="info-text lg:max-w-xl mt-3">
            Explore a world of endless possibilities crafted to meet your
            individual wishes, exceeding even the highest expectations. Your
            experience with us is truly extraordinary.
          </p>
          <div className="mt-3 relative w-[100%] flex items-center">
            <input
              className="border p-4 rounded-3xl font-sans font-semibold text-lg w-[100%]"
              type="text"
              placeholder="cus@email.com"
            />

            <button className="border p-3 rounded-3xl font-sans font-semibold text-lg text-white bg-coral-red absolute right-2">
              Sign Up <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
