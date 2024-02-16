const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container max-sm:mt-12">
      <div className="flex flex-1 gap-3 max-lg:block">
        <div>
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality, Styles And </span> Sport
            Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </div>
        <div className="h-[470px] w-[470px] border rounded-full relative bg-hero bg-cover max-lg:h-[300px] max-lg:w-[300px] max-lg:mt-10">
          <img
            alt="quality"
            src="/img/quality.png"
            className="absolute h-[540px] max-lg:h-[380px] -top-12"
          />
        </div>
        <div>
          <p className="mt-4 lg:max-w-lg info-text">
            Sport keeps us fit. Keeps you mindful. Brings us together. Through
            sport we have the power to change lives. Whether it is through
            stories of inspiring athletes. Helping you to get up and get moving.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our sports clothing keeps you focused before that whistle blows.
            During the race. And at the finish lines. We’re here to
            supportcreators. Improve their game. Their lives. And change the
            world.
          </p>
          <button className="mt-12 p-3 bg-coral-red text-white rounded-3xl font-montserrat">
            View More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
