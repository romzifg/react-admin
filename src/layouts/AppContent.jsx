import RightLayout from "../layouts/RightLayout";
import Sidebar from "../layouts/Sidebar";
import Dashboard from "../pages/Dashboard";
import RightDashboard from "./RightDashboard";

const AppContent = () => {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <Dashboard />
        <RightLayout children={<RightDashboard />} />
      </div>
    </div>
  );
};

export default AppContent;
