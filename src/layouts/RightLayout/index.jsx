import { useDispatch, useSelector } from "react-redux";
import {
  changeMenuDisplay,
  changeDarkTheme,
} from "../../redux/slices/globalSlice";

const RightLayout = (props) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.global.isDark);

  return (
    <div className="right">
      <div className="top">
        <button
          id="menu-btn"
          onClick={() => dispatch(changeMenuDisplay("aside-block"))}
        >
          <span className="material-icons-sharp">menu</span>
        </button>
        <div
          className="theme-toggler"
          onClick={() => dispatch(changeDarkTheme(!isDark))}
        >
          <span className={`material-icons-sharp ${!isDark ? "active" : ""}`}>
            light_mode
          </span>
          <span className={`material-icons-sharp ${isDark ? "active" : ""}`}>
            dark_mode
          </span>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Romzi</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src="./assets/images/profile-1.jpg" alt="profile" />
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default RightLayout;
