import { useState } from "react";
import { itemList } from "../constants";
import ModalProduct from "./ModalProduct";

const PopularProducts = () => {
  const [showProduct, setShowProduct] = useState("");

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-10 flex-wrap w-[40%] max-sm:w-full">
        <p className="text-4xl font-bold">
          Our <span className="text-coral-red">Best</span> Seller
        </p>
        <p className="font-light text-gray-600">
          The best seller shoes are renowned for their exceptional comfort,
          stylish designs, and unmatched durability, making them a top choice
          for customers worldwide.
        </p>
      </div>
      <div className="flex justify-between mt-10 gap-4 max-sm:flex-col">
        {itemList.map((item) => (
          <div key={item.id}>
            <div
              className="h-[280px] w-[280px] border rounded-xl relative bg-primary bg-hero bg-cover bg-center cursor-pointer "
              onClick={() => setShowProduct(item)}
            >
              <img
                src={item.cover}
                alt="product img"
                className="h-[100%] w-[100%] object-cover absolute rounded-xl"
              />
            </div>
            <div className="mt-6 font-sans text-coral-red">
              <i className="fa-solid fa-star"></i>{" "}
              <span className="text-slate-400">(4.5)</span>
            </div>
            <p className="text-black text-lg mt-2 font-semibold">{item.name}</p>
            <p className="font-mono mt-2 text-slate-500">$ {item.price}</p>
          </div>
        ))}
      </div>
      <ModalProduct show={showProduct} setShow={setShowProduct} />
    </section>
  );
};

export default PopularProducts;
