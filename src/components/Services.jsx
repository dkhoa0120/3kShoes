import { services } from "../constants";

const Services = () => {
  return (
    <div className="max-container max-sm:mt-12">
      <div className="flex gap-5 justify-between max-lg:flex-col">
        {services.map((item) => (
          <div
            key={item.label}
            className="p-10 shadow-3xl rounded-lg w-[500px] h-[300px] max-lg:w-[300px] "
          >
            <div className="bg-coral-red w-12 h-12 rounded-full flex items-center justify-center">
              <img alt="icon" src={item.imgURL} />
            </div>
            <p className="mt-6 font-bold text-2xl text-slate-700">
              {item.label}
            </p>
            <p className="info-text">{item.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
