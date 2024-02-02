import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";
import { MdHomeRepairService, MdOutlineEmail } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { user } = useContext(Authcontext);
  const [openModal, setOpenModal] = useState(false);

  const {
    // _id,
    serviceName,
    ownerName,
    image,
    price,
    serviceArea,
    description,
    ownerEmail,
  } = useLoaderData();

  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const providerEmail = form.providerEmail.value;
    const userEmail = form.userEmail.value;
    const price = form.price.value;
    const instruction = form.instruction.value;
    const date = form.date.value;
    const imageLink = image;

    form.reset();

    const purchaseInfo = {
      name,
      providerEmail,
      userEmail,
      price,
      instruction,
      date,
      imageLink,
    };

    const bookingData = await axios.post(
      "https://discoverdue.vercel.app/api/v1/booking",
      purchaseInfo
    );
    console.log(bookingData);
    if (bookingData?.data?.acknowledged === true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Booking completed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="max-w-[85rem] w-full mx-auto px-4 mb-10">
      <div className="relative flex flex-col  p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 dark:divide-gray-700">
        <div className="flex flex-1 items-center gap-3 p-3">
          <img
            alt=""
            src={user?.photoURL}
            // src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 dark:bg-gray-500 rounded-full shadow"
          />
          <div className="space-y-1">
            <span className="text-xs">April 03, 2021</span>
            <div className="flex flex-wrap gap-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                {user?.displayName}
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                user
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                Travel
              </a>
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-800 dark:text-gray-100 flex-1">
          <Link
            rel="noopener noreferrer"
            className="block gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src={image}
              // src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-12 dark:bg-gray-500"
            />
          </Link>
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">{price}</span>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                {serviceArea}
              </a>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                {serviceName}
              </a>
              <p className="mt-2">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setOpenModal(true)}
                rel="noopener noreferrer"
                href="#"
                className="btn btn-ghost bg-slate-300 rounded px-4 py-2 hover:underline dark:text-violet-400"
              >
                Book Now
              </button>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src={user?.photoURL}
                    // src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    {ownerName}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="w-72 mx-auto flex items-center justify-center">
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed flex justify-center items-center z-[100] ${
            openModal ? "visible opacity-1" : "invisible opacity-0"
          } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
              openModal
                ? "opacity-1 duration-300 translate-y-0"
                : "-translate-y-20 opacity-0 duration-150"
            }`}
          >
            <form onSubmit={handlePurchase} className="p-12">
              <svg
                onClick={() => setOpenModal(false)}
                className="w-10 mx-auto mr-0 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center mb-10"
              >
                <img
                  src={image}
                  // src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-80 sm:h-10 md:h-40 lg:h-50 mx-4 rounded dark:bg-gray-500"
                />
              </a>
              <div className="space-y-5">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label htmlFor="name" className="block">
                      Service Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        readOnly
                        defaultValue={serviceName}
                        className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                      />
                      <span className="absolute top-1/4 left-2">
                        <MdHomeRepairService className="text-2xl" />
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="providerEmail" className="block">
                      Service Provider Email
                    </label>
                    <div className="relative">
                      <input
                        id="providerEmail"
                        type="email"
                        name="providerEmail"
                        readOnly
                        defaultValue={ownerEmail}
                        className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                      />
                      <span className="absolute top-1/4 left-2">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="inline-block w-6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
                              fill="#000000"
                            ></path>
                            <rect
                              x="2.5"
                              y="2.5"
                              width="19"
                              height="19"
                              rx="3.5"
                              stroke="#000000"
                            ></rect>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label htmlFor="userEmail" className="block">
                      User Email
                    </label>
                    <div className="relative">
                      <input
                        id="userEmail"
                        type="email"
                        name="userEmail"
                        readOnly
                        defaultValue={user?.email}
                        className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                      />
                      <span className="absolute top-1/4 left-2">
                        <MdOutlineEmail className="text-2xl" />
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="price" className="block">
                      Price
                    </label>
                    <div className="relative">
                      <input
                        id="price"
                        type="number"
                        name="price"
                        readOnly
                        defaultValue={price}
                        className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                      />
                      <span className="absolute top-1/4 left-2">
                        <IoIosPricetag className="text-2xl" />
                      </span>
                    </div>
                  </div>
                </div>
                <label htmlFor="instruction" className="block">
                  Special Instruction
                </label>
                <div className="relative">
                  <textarea
                    id="instruction"
                    type="text"
                    name="instruction"
                    className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                  ></textarea>
                  <p className="text-red-500">
                    Here you can send your preferable location and discuss your
                    service plan also.
                  </p>
                  <span className="absolute top-1/4 left-2">
                    {/* <BsCalendarDate className="text-2xl" /> */}
                  </span>
                </div>
                <label htmlFor="date" className="block">
                  Service Taking Date
                </label>
                <div className="relative">
                  <input
                    id="date"
                    type="date"
                    name="date"
                    defaultValue=""
                    className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                  />
                  <span className="absolute top-1/4 left-2">
                    <BsCalendarDate className="text-2xl" />
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
              >
                Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
