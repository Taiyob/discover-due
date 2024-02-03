import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaCreditCard,
  FaGooglePay,
} from "react-icons/fa";
import { SiIata, SiPayoneer } from "react-icons/si";
import { FcMoneyTransfer } from "react-icons/fc";
import { PiMoneyLight } from "react-icons/pi";

const Clients = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
            Trusted by Open Source, enterprise, and more than 99,000 of you
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-6">
          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <FaCcMastercard className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <FaCcVisa className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <FaCreditCard className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <FaCcPaypal className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <SiPayoneer className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <FaGooglePay className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <FcMoneyTransfer className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <SiIata className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <FaCcApplePay className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <PiMoneyLight className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
