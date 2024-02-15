import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes } from "../constants";

const Welcome = () => {
  const [currentShoes, setCurrentShoes] = useState(shoes[0].thumbnail);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Sport</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish arrivals, quality comfort, and innovation for your
          active life.
        </p>

        <button className="flex items-center justify-center gap-1 bg-coral-red p-3 rounded-lg hover:bg-black">
          {" "}
          <span className="text-white">Shop now</span>{" "}
          <img src={arrowRight} alt="arrow right icon" />
        </button>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          <div>
            <p className="text-4xl font-palanquin font-bold">200+</p>
            <p className="font-light font-montserrat text-slate-gray">Brands</p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold">5k+</p>
            <p className="font-light font-montserrat text-slate-gray">
              Reviews
            </p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold">30+</p>
            <p className="font-light font-montserrat text-slate-gray">Gifts</p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold">10+</p>
            <p className="font-light font-montserrat text-slate-gray">Shops</p>
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
        <img
          src={currentShoes}
          alt="shoe colletion"
          height={500}
          width={500}
          className="object-contain relative "
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div
              key={index}
              className={`w-[200px] h-[200px] shadow bg-primary bg-hero bg-cover bg-center rounded-lg cursor-pointer max-sm:w-[90px] max-sm:h-[90px] ${
                currentShoes === image.thumbnail
                  ? "border-2 border-coral-red"
                  : ""
              }`}
              onClick={() => setCurrentShoes(image.thumbnail)}
            >
              <img src={image.bigShoe} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
