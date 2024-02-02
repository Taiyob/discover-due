import Lottie from "lottie-react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import loadingLottie from "../assets/animation/simpleLoader.json";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateService = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const {
    _id,
    serviceName,
    ownerName,
    image,
    price,
    serviceArea,
    description,
  } = useLoaderData();
  if (navigation.loading == "loading") {
    return (
      <div>
        <Lottie>{loadingLottie}</Lottie>
      </div>
    );
  }
  console.log(serviceName, ownerName, image, price, serviceArea, description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.area.value;
    const description = form.description.value;

    const updateData = {
      image,
      serviceName,
      price,
      serviceArea,
      description,
    };
    console.log("Update Data:", updateData);
    const response = await axios.put(
      `https://discoverdue.vercel.app/api/v1/update-services/${_id}`, 
      // `http://localhost:5000/api/v1/update-services/${_id}`,
      updateData
    );
    const updatedResponse = response?.data;
    if (updatedResponse?.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Service updated has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    navigate("/dashboard/manage-services");
  };

  return (
    <div>
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="text-4xl font-bold my-5 text-center">Update Services</h1>
        <p className="text-center font-semibold text-2xl">
          Service Holder: {ownerName}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/component/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
            <div className="absolute top-0 end-0 p-4"></div>
          </div>
          <div className="bg-white rounded-xl shadow dark:bg-black">
            <div className="pt-0 p-4 sm:pt-0 sm:p-7">
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-project-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Service name
                  </label>

                  <input
                    id="af-submit-app-project-name"
                    type="text"
                    name="serviceName"
                    defaultValue={serviceName}
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-service-area"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Service Area
                  </label>

                  <input
                    id="af-submit-app-service-area"
                    type="text"
                    name="area"
                    defaultValue={serviceArea}
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-project-url"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Image URL
                  </label>

                  <input
                    id="af-submit-project-url"
                    type="text"
                    name="image"
                    defaultValue={image}
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>

                {/* <div className="space-y-2">
              <label
                htmlFor="af-submit-app-category"
                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
              >
                Category
              </label>

              <select
                id="af-submit-app-category"
                className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              >
                <option selected>Select a category</option>
                <option>Ecommerce</option>
                <option>Finance</option>
                <option>Marketplace</option>
                <option>Social</option>
                <option>Others</option>
              </select>
            </div> */}

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-service-price"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Price
                  </label>

                  <input
                    id="af-submit-app-service-price"
                    type="number"
                    name="price"
                    defaultValue={price}
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Description
                  </label>

                  <textarea
                    defaultValue={description}
                    name="description"
                    id="af-submit-app-description"
                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    rows="6"
                  ></textarea>
                </div>
              </div>

              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
