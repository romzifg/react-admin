import RightLayout from "../layouts/RightLayout";
import Sidebar from "../layouts/Sidebar";
import Dashboard from "../pages/Dashboard";

const AppContent = () => {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <Dashboard />
        <RightLayout />
      </div>
    </div>
  );
};

export default AppContent;
