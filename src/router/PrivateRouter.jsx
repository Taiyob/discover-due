import PropTypes from "prop-types";
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import Lottie from "lottie-react";
import lottieLoader from "../assets/animation/simpleLoader.json";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { loader, user } = useContext(Authcontext);
  const location = useLocation();

  if (loader) {
    return <Lottie animationData={lottieLoader}></Lottie>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
