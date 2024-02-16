import { reviews } from "../constants";

const CusReviews = () => {
  return (
    <div className="max-container">
      <h1 className="text-center font-palanquin font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h1>
      <p className="info-text text-center mt-4 sm:max-w-lg m-auto">
        Listen to authentic testimonials from our delighted customers sharing
        their extraordinary encounters with our services.
      </p>
      <div className="mt-5 flex justify-between m-auto gap-6 max-lg:flex-col">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-3 sm:max-w-lg"
          >
            <img
              alt="avatar"
              src={item.imgURL}
              className="w-[170px] h-[170px] rounded-full"
            />
            <p className="mt-3 info-text text-center">{item.feedback}</p>
            <div className="font-sans text-xl text-coral-red">
              <i className="fa-solid fa-star"></i>{" "}
              <span className="text-slate-400">(4.5)</span>
            </div>
            <h4 className="font-semibold">{item.customerName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CusReviews;
