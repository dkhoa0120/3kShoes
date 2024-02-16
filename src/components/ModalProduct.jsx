/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const ModalProduct = ({ show, setShow }) => {
  const [picture, setPicture] = useState("");
  const [chooseSize, setChooseSize] = useState("");

  useEffect(() => {
    setPicture(show?.photo?.[0]?.img);
  }, [show?.photo]);

  const handleClose = () => {
    // Reset states to their initial values
    setPicture("");
    setChooseSize("");
    // Close the modal
    setShow("");
  };

  return (
    <div>
      {show && (
        <Modal show={true} onHide={() => handleClose()} size="xl">
          <Modal.Body>
            <button className="absolute right-3 " onClick={() => handleClose()}>
              <i className="fa-regular fa-circle-xmark fa-2xl"></i>
            </button>
            {show && (
              <div className="grid grid-cols-2 gap-4 max-lg:flex max-lg:flex-col p-2">
                <div className="flex flex-col items-center justify-center">
                  <div className="border rounded-xl relative bg-primary bg-hero bg-cover bg-center w-[90%] h-[530px] max-lg:h-[350px] max-lg:mt-4">
                    <img
                      src={picture}
                      alt="pic"
                      className="rounded-xl w-[100%] h-[100%] absolute"
                    />
                  </div>

                  <div className="flex gap-3 justify-center items-center mt-8 max-lg:w-[100%]">
                    {show.photo.map((item) => (
                      <div
                        onClick={() => setPicture(item.img)}
                        key={item.id}
                        className={`h-[100px] w-[100px] relative rounded-xl bg-primary bg-hero bg-cover bg-center cursor-pointer ${
                          item.img === picture
                            ? "border h-[130px] w-[130px] shadow"
                            : ""
                        }`}
                      >
                        <img
                          src={item.img}
                          alt="shoes"
                          className="h-[100%] w-[100%] object-cover absolute rounded-xl"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-2">
                  <h1>{show.name}</h1>
                  <p className="font-sans mt-6 text-slate-800 text-3xl">
                    $ {show.price}
                  </p>
                  <div className="mt-2 font-sans text-coral-red">
                    <i className="fa-solid fa-star"></i>{" "}
                    <span className="text-slate-400">(4.5)</span>
                  </div>
                  <div className="mt-2 flex items-center justify-start">
                    <p className="font-serif font-semibold">
                      Brand:{" "}
                      <span className="text-slate-500 font-light font-montserrat ml-3">
                        {show.brand}
                      </span>
                    </p>
                  </div>
                  <div className="mt-2 flex items-center justify-start">
                    <p className="font-serif font-semibold">
                      Color:{" "}
                      <span className="text-slate-500 font-light font-montserrat ml-3">
                        {show.color}
                      </span>
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="font-serif font-semibold">Select Side: </p>
                    <div className="flex gap-3">
                      {show?.sizes.map((i) => (
                        <div
                          onClick={() => setChooseSize(i.size)}
                          key={i.id}
                          className={`p-3 rounded-xl border cursor-pointer ${
                            chooseSize === i.size
                              ? "bg-coral-red text-white"
                              : ""
                          }`}
                        >
                          EU {i.size}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-[100%] bg-coral-red text-white font-[20px] text-lg mt-6 p-3 rounded-3xl hover:bg-red-400">
                    Add to Bag
                  </button>
                  <button className="w-[100%] border border-gray-400 font-[20px] text-lg mt-6 p-3 rounded-3xl hover:bg-slate-100">
                    Favorite <i className="fa-regular fa-heart"></i>
                  </button>
                  <div className="mt-4 flex flex-col gap-3">
                    <a>
                      <i className="fa-solid fa-truck-fast"></i> Free Shipping
                      For Members
                    </a>
                    <a>
                      <i className="fa-brands fa-usps"></i> Easy Return
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ModalProduct;
