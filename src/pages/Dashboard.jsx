import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 col-span-4">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
              Dashboard
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink to="/" rel="noopener noreferrer">
                Home
              </NavLink>
              <NavLink rel="noopener noreferrer">
                User Profile
              </NavLink>
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                Appearance
              </a>
              <a rel="noopener noreferrer" href="#"></a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
              Services Area
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink to="/dashboard/add-services" rel="noopener noreferrer">
                Add Service
              </NavLink>
              <NavLink to='/dashboard/manage-services' rel="noopener noreferrer">
                Manage Service
              </NavLink>
              <a rel="noopener noreferrer" href="#">
                Page Title
              </a>
              <a rel="noopener noreferrer" href="#">
                Menus
              </a>
              <a rel="noopener noreferrer" href="#">
                Sidebar
              </a>
              <a rel="noopener noreferrer" href="#">
                Footer
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
              Pages
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Homepage
              </a>
              <a rel="noopener noreferrer" href="#">
                Users
              </a>
              <a rel="noopener noreferrer" href="#">
                Tools
              </a>
              <a rel="noopener noreferrer" href="#">
                Settings
              </a>
            </div>
          </div>
          {/* <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
              Misc
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Tutorials
              </a>
              <a rel="noopener noreferrer" href="#">
                Changelog
              </a>
            </div>
          </div> */}
        </nav>
      </aside>
      <div className="col-span-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
