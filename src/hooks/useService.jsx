import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useService = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["serviceData"],
    queryFn: async () => {
      const serviceinfo = await axios.get(
        "https://discoverdue.vercel.app/api/v1/manage-services"
      );
      return serviceinfo;
    },
  });
  console.log(data, isLoading, isFetching, refetch);

  return { data, isLoading, isFetching, refetch };
};

export default useService;
