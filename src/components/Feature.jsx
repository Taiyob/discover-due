import { FaBus, FaTrain } from "react-icons/fa";
import {
  MdOutlineAirplanemodeActive,
  MdOutlineHotelClass,
  MdOutlineMeetingRoom,
  MdOutlineTableRestaurant,
} from "react-icons/md";

const Feature = () => {
  return (
    <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">Serve to people many services</h2>
        {/* <p className="dark:text-gray-400">Libero minima optio qui</p> */}
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <MdOutlineHotelClass className="text-3xl" />
          <h3 className="my-3 text-3xl font-semibold">Hotel</h3>
          <div className="space-y-1 leadi text-center">
            <p>Plan your next getaway with ease through our hotel booking</p>
            <p>service. Discover a range of comfortable accommodations,</p>
            <p>from cozy boutique hotels to luxurious resorts.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <MdOutlineTableRestaurant className="text-3xl" />
          <h3 className="my-3 text-3xl font-semibold">Resort</h3>
          <div className="space-y-1 leadi text-center">
            <p>Escape to paradise with our resort booking</p>
            <p>service. Find the ideal resort for your dream vacation,</p>
            <p>whether it is a beachfront oasis or a mountain retreat.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <MdOutlineMeetingRoom className="text-3xl" />
          <h3 className="my-3 text-3xl font-semibold">Banglow</h3>
          <div className="space-y-1 leadi text-center">
            <p>ndulge in luxury with our bungalow booking service.</p>
            <p>I Explore a collection of exclusive bungalows, each</p>
            <p>offering a private retreat and personalized experience.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <MdOutlineAirplanemodeActive className="text-3xl" />
          <h3 className="my-3 text-3xl font-semibold">Air Ticket</h3>
          <div className="space-y-1 leadi text-center">
            <p>Embark on your next adventure with our plane ticket</p>
            <p>booking service. Discover a world of possibilities as you</p>
            <p>browse through a variety of airlines and flight options.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <FaBus className="text-3xl" />
          <h3 className="my-3 text-3xl font-semibold">Bus Ticket</h3>
          <div className="space-y-1 leadi text-center">
            <p>Experience the convenience of seamless travel with our bus</p>
            <p>
              ticket booking service. You are planning a short commute
            </p>
            <p>or a cross-country journey, we have got you covered.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <FaTrain className="text-3xl" />
          <h3 className="my-3 text-3xl font-semibold">Train Ticket</h3>
          <div className="space-y-1 leadi text-center">
            <p>Bid farewell to the uncertainties of travel and long</p>
            <p>queues. Secure your train tickets in advance, ensuring</p>
            <p>a reserved seat for a stress-free travel experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
