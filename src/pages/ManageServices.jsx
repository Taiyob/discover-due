//import { useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import ManageServicesCard from "../components/ManageServicesCard";
import useService from "../hooks/useService";
import lottieLoader from "../assets/animation/boreLoader.json";
import noFoundLottie from "../assets/animation/noNet.json";

const ManageServices = () => {
  const { data, isLoading, isFetching, refetch } = useService();
  // const allServices = useLoaderData();
  // console.log(allServices);
  console.log(data, isLoading, isFetching, "retech", refetch);
  //console.log(data.data.length);
  if (isLoading || isFetching) {
    return (
      <div className="text-center max-h-12 max-w-96 mt-32 ml-32">
        <Lottie animationData={lottieLoader} />
      </div>
    );
  }

  if (!data || !data?.data || data?.data?.length === 0) {
    return (
      <div>
        <Lottie>{noFoundLottie}</Lottie>
      </div>
    );
  }
  return (
    <div>
      {data?.data ? (
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">All Services</h2>
              <p className="font-serif text-sm dark:text-gray-400">
                Please, manage your services from every single card
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {data?.data.map((servicesCard) => (
                <ManageServicesCard
                  key={servicesCard._id}
                  servicesCard={servicesCard}
                  refetch={refetch}
                ></ManageServicesCard>
              ))}
            </div>
          </div>
        </section>
      ) : (
        "No data found"
      )}
    </div>
  );
};

export default ManageServices;
