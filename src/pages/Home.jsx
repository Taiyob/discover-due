import Clients from "../components/Clients";
import Feature from "../components/Feature";
import Members from "../components/Members";
import Membership from "../components/Membership";
import PopularService from "../components/PopularService";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularService></PopularService>
      <div className="bg-violet-400 my-10">
        <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracki font-bold">
                Up to
                <br className="sm:hidden" />
                50% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span> For Membership! Use code:</span>
                <span className="font-bold text-lg">DISCOVER</span>
              </div>
              <a
                href="#"
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Feature></Feature>
      <Testimonial></Testimonial>
      <Membership></Membership>
      <Members></Members>
      <Clients></Clients>
    </div>
  );
};

export default Home;
