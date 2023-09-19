import { useSelector } from "react-redux";
import AppContent from "./layouts/AppContent";

const App = () => {
  const isDark = useSelector((state) => state.global.isDark);
  return (
    <>
      <div className={`body ${isDark ? "dark-theme-variables" : ""}`}>
        <AppContent />
      </div>
    </>
  );
};

export default App;
