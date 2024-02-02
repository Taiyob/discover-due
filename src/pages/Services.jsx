import { useContext } from "react";
import useService from "../hooks/useService";
import { Authcontext } from "../provider/AuthProvider";
import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animation/simpleLoader.json";

const Services = () => {
  const { data, isLoading, isFetching, refetch } = useService();
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Lottie
        className="text-center text-xs"
        animationData={loadingAnimation}
        loop={true}
      ></Lottie>
    );
  }

  const handleDetailsClick = (id) => {
    navigate(`/service/detail/${id}`);
  };

  return (
    <div className="max-w-[85rem] w-full mx-auto px-4 mb-10 grid grid-cols-6 gap-5">
      {data?.data.map((allService) => (
        <div
          key={allService._id}
          className="max-w-[350px] font-sans border shadow-lg rounded-lg mx-auto"
        >
          <div className="px-4 py-4 flex gap-10 justify-between items-center">
            <div className="flex gap-3 items-center">
              <img
                className="w-10 h-10 rounded-full bg-black/40"
                src={user?.photoURL}
                alt="user"
              />
              <div className="flex flex-col">
                <h2 className="text-xs font-semibold">{user?.displayName}</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="w-full">
              <img
                className="w-full h-[150px] bg-black/40"
                src={allService?.image}
                alt=""
              />
            </div>
          </div>

          <div className="mt-2 px-4">
            <h2 className=" text-xl font-semibold">
              {allService?.serviceName}
            </h2>
            <h2 className="py-1  text-sm ">
              {allService?.description && allService.description.length > 100
                ? `${allService?.description.slice(0, 100)}...`
                : allService?.description}
            </h2>
          </div>

          <div className="mt-2 px-4  flex  justify-between pb-4">
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <h2 className="text-xs font-semibold">
                {allService?.serviceArea}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaDollarSign />
              <h2 className="text-xs font-semibold">{allService?.price}</h2>
            </div>
          </div>
          <div className="p-2 flex justify-center items-center">
            <button
              onClick={() => handleDetailsClick(allService?._id)}
              className="btn btn-sm px-8 rounded-xl bg-slate-400 text-white"
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
