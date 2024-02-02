import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-slate-300 px-10 grid grid-cols-12" style={{
      backgroundImage: "url('https://ibb.co/XyGS9Sz')",
    }}>
      <aside
        className="w-full p-3 h-screen bg-white sm:w-60 md:w-full dark:bg-gray-900 dark:text-gray-100 col-span-2"
        style={{
          backgroundImage: "url('https://ibb.co/XyGS9Sz')",
        }}
      >
        <nav className="space-y-8 w-full text-center text-sm rounded bg-blue-100">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400 bg-blue-800 p-2 text-white">
              Dashboard
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-pink-300 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Home
              </NavLink>
              <NavLink
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-pink-300 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                User Profile
              </NavLink>
              <NavLink
                to="/"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-pink-300 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Appearance
              </NavLink>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400 bg-blue-800 p-2 text-white">
              Services Area
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/dashboard/add-services"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-yellow-500 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Add Service
              </NavLink>
              <NavLink
                to="/dashboard/manage-services"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-yellow-500 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Manage Service
              </NavLink>
              <NavLink
                to="/dashboard/schedules"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-yellow-500 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                My Schedules
              </NavLink>
              <NavLink
                to="/dashboard/pending-booking"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-yellow-500 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Pending Booking
              </NavLink>
              <NavLink
                to="/dashboard/complete-booking"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-yellow-500 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Complete Booking
              </NavLink>
              <NavLink
                to="/dashboard/popular-service"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-yellow-500 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Popular Service
              </NavLink>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400 bg-blue-800 p-2 text-white">
              Pages
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-green-700 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Homepage
              </NavLink>
              <NavLink
                to="/dashboard/user"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-green-700 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Users
              </NavLink>
              <NavLink
                to="/dashboard/tools"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-green-700 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Tools
              </NavLink>
              <NavLink
                to="/dashboard/settings"
                rel="noopener noreferrer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-slate-300 p-2 rounded transition-transform transform hover:scale-105"
                    : "bg-green-700 p-2 rounded transition-transform transform hover:scale-105"
                }
              >
                Settings
              </NavLink>
            </div>
          </div>
        </nav>
      </aside>
      <div className="col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
