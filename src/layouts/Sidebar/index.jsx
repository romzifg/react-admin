import { useDispatch, useSelector } from "react-redux";
import {
  changeMenuDisplay,
  changeSideActive,
} from "../../redux/slices/globalSlice";
import { MenuList } from "./MenuList";
import "./style.scss";

const Sidebar = () => {
  const dispatch = useDispatch();
  const menuDisplay = useSelector((state) => state.global.menuDisplay);
  const sideIsActive = useSelector((state) => state.global.sideIsActive);

  return (
    <aside className={menuDisplay}>
      <div className="top">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
          <h2>
            EGA<span className="danger">TOR</span>
          </h2>
        </div>
        <div
          className="close"
          id="close-btn"
          onClick={() => dispatch(changeMenuDisplay("aside-none"))}
        >
          <span className="material-icons-sharp">close</span>
        </div>
      </div>

      <div className="sidebar">
        {MenuList.map((el) => (
          <a
            key={el.key}
            href="#"
            onClick={() => dispatch(changeSideActive(el.key))}
            className={sideIsActive === el.key ? "active" : ""}
          >
            {el.icon}
            <h3>{el.title}</h3>
          </a>
        ))}
        <a href="#">
          <span className="material-icons-sharp">logout</span>
          <h3>Log Out</h3>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
