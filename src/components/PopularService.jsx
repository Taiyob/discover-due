import { useNavigate } from "react-router-dom";
import useService from "../hooks/useService";

const PopularService = () => {
  const { data, isLoading } = useService();
  const navigate = useNavigate();

  const handleDetailsClick = (id) => {
    navigate(`/service/detail/${id}`);
  };

  if (!isLoading) {
    const popularServices = data?.data.filter(
      (service) => service?.type === "popular"
    );

    return (
      <div className="max-w-[85rem] w-full mx-auto">
        <h1 className="text-center py-10 text-5xl text-red-400 font-bold">
          Popular Service
        </h1>
        <div className="grid grid-cols-2 gap-10">
          {popularServices.map((service) => (
            <div
              key={service._id}
              className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
            >
              <img
                src={service?.image}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    {service.title}
                  </h2>
                  <p className="dark:text-gray-100">{service.description}</p>
                </div>
                <button
                  onClick={() => handleDetailsClick(service?._id)}
                  type="submit"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default PopularService;
