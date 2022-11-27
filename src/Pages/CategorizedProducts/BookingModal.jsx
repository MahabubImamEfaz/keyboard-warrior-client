import React from "react";

const BookingModal = ({ product, setProduct }) => {
  const {
    _id,
    brand_name,
    product_name,
    image,
    location,
    original_price,
    resale_price,
    years_of_use,
    time,
  } = product;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const price = form.price.value;
    const productName = form.productName.value;
    const location = form.location.value;
    // console.log(name, email, phoneNumber, price, productName, location);
    const submitted = {
      name,
      email,
      phoneNumber,
      price,
      productName,
      location,
    };

    console.log(submitted);
    setProduct(null);
  };

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{product_name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input w-full input-bordered"
            />
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              type="text"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              placeholder="location"
              type="text"
              className="input w-full input-bordered"
            />
            <input
              name="productName"
              type="text"
              value={product_name}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="price"
              value={resale_price}
              disabled
              type="text"
              className="input w-full input-bordered"
            />

            <input
              className="btn bg-[#2a9d8f]  w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
