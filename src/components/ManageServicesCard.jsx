import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageServicesCard = ({ servicesCard, refetch }) => {
  const { _id, image, serviceName, price, serviceArea } = servicesCard;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://discoverdue.vercel.app/api/v1/delete-services/${_id}`)
          .then((res) => {
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Service has been deleted.",
                icon: "success",
              });
              refetch();
              console.log("deleted");
            }
          })
          .catch((err) => {
            err.message;
          });
      }
    });
  };
  return (
    <div>
      {servicesCard ? <article className="flex flex-col dark:bg-gray-900">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            // src="https://source.unsplash.com/200x200/?fashion?1"
            src={image}
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracki uppercase hover:underline dark:text-violet-400"
          >
            {serviceName}
          </a>
          <h3 className="flex-1 py-2 text-base font-semibold leadi flex justify-evenly items-center space-x-1">
            Area:
            <span className="flex-1 mr-3 text-sm text-gray-500 ml-1">
              {serviceArea}
            </span>
            BDT:
            <span className="flex-1 text-sm text-gray-500 ml-1">
              {" "}
              {price}/tk
            </span>
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <Link to={`/dashboard/manage-services/${_id}`}>
              <button className="bg-sky-300 p-3 rounded">Edit</button>
            </Link>
            <button onClick={handleDelete} className="bg-red-400 p-3 rounded">
              Delete
            </button>
          </div>
        </div>
      </article> : 'No data found'}
      {/* <article className="flex flex-col dark:bg-gray-900">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            // src="https://source.unsplash.com/200x200/?fashion?1"
            src={image}
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracki uppercase hover:underline dark:text-violet-400"
          >
            {serviceName}
          </a>
          <h3 className="flex-1 py-2 text-base font-semibold leadi flex justify-evenly items-center space-x-1">
            Area:
            <span className="flex-1 mr-3 text-sm text-gray-500 ml-1">
              {serviceArea}
            </span>
            BDT:
            <span className="flex-1 text-sm text-gray-500 ml-1">
              {" "}
              {price}/tk
            </span>
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <Link to={`/dashboard/manage-services/${_id}`}>
              <button className="bg-sky-300 p-3 rounded">Edit</button>
            </Link>
            <button onClick={handleDelete} className="bg-red-400 p-3 rounded">
              Delete
            </button>
          </div>
        </div>
      </article> */}
    </div>
  );
};

ManageServicesCard.propTypes = {
  servicesCard: PropTypes.object,
  refetch: PropTypes.func,
};

export default ManageServicesCard;
