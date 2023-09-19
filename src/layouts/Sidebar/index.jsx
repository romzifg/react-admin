const Sidebar = () => {
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
          <h2>
            EGA<span className="danger">TOR</span>
          </h2>
        </div>
        <div className="close" id="close-btn">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>

      <div className="sidebar">
        <a href="#">
          <span className="material-icons-sharp">dashboard</span>
          <h3>Dashboard</h3>
        </a>
        <a href="#" className="active">
          <span className="material-icons-sharp">person</span>
          <h3>Customers</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">receipt_long</span>
          <h3>Orders</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Messages</h3>
          <span className="message-count">26</span>
        </a>
        <a href="#">
          <span className="material-icons-sharp">inventory</span>
          <h3>Products</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reports</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">add</span>
          <h3>Add Products</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">logout</span>
          <h3>Log Out</h3>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
