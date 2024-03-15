import { useContext, useState } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Offcanvas } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(false);

  const { cart, setCart } = useContext(CartContext);

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleMinus = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };
  const handleAdd = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  console.log(cart);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src="/img/logo.png"
            alt="logo"
            className="m-0 w-[220px] h-[80px] -mt-20"
          />
        </a>
        <ul className="flex-1 mt-10 flex justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-[14px] text-slate-gray no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center text-[15px] leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <div className="p-3 rounded-3xl border-slate-400 border w-[200px] text-slate-600 cursor-pointer">
            {" "}
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </div>
          <a className="no-underline text-black" href="/">
            Sign in
          </a>
          <span>/</span>
          <a className="no-underline text-black" href="/">
            Sign up
          </a>
        </div>
        <div className="cursor-pointer pr-3 relative">
          <i
            className="fa-solid fa-cart-shopping fa-xl"
            onClick={() => setShow(true)}
          ></i>
          {cart.length > 0 && (
            <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white -top-3 left-6 flex items-center justify-center">
              <span>{cart.length}</span>
            </div>
          )}
        </div>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        {showNav && (
          <ul className="flex flex-col absolute bg-white top-24 right-3 z-50 gap-12 lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-[14px] text-slate-gray no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <Offcanvas show={show} placement={"end"}>
        <p
          style={{
            position: "absolute",
            left: "20px",
            top: "40px",
            fontWeight: "bold",
          }}
        >
          Your Cart Shopping
        </p>
        <div className="absolute right-3 top-10" onClick={() => setShow(false)}>
          <i className="fa-regular fa-circle-xmark fa-2xl"></i>
        </div>
        <Offcanvas.Body>
          <div className="w-full flex justify-between items-center mt-20 flex-col">
            {cart.length > 0 ? (
              <>
                {cart.map((item, key) => (
                  <div
                    key={key}
                    className="w-full border pt-2 pb-2 rounded-lg flex "
                  >
                    <img src={item.img} className="w-[40%] left-0" />
                    <div>
                      <div className="flex pl-2 pr-2 justify-between">
                        <p className="w-[60%] font-[500]">{item.name} </p>

                        <p className="font-bold">
                          {(item.prices * item.quantity).toFixed(2)}$
                        </p>
                      </div>
                      <p className="pl-2">Size: {item.size}</p>
                      <div className="flex justify-between p-2 items-center">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => handleMinus(item.id)}
                            className="p-2 border"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>{" "}
                          <div className="p-2 border">{item.quantity} </div>
                          <button
                            onClick={() => handleAdd(item.id)}
                            className="p-2 border"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                        <div
                          className="cursor-pointer mr-3 font-bold"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {" "}
                <h5>Your Cart Is Empty !</h5>
                <img src="/img/empty.jpg" alt="" />
                <p>Add somethings to your cart</p>
              </>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Nav;
