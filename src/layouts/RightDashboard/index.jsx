const RightDashboard = () => {
  return (
    <>
      <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src="./assets/images/profile-2.jpg" alt="profile" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src="./assets/images/profile-3.jpg" alt="profile" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src="./assets/images/profile-4.jpg" alt="profile" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>

      <div className="sales-analytics">
        <h2>Sales Analytics</h2>
        <div className="item online">
          <div className="icon">
            <span className="material-icons-sharp active">shopping_cart</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>ONLINE ORDERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">+39%</h5>
            <h3>3849</h3>
          </div>
        </div>
        <div className="item offline">
          <div className="icon">
            <span className="material-icons-sharp active">local_mall</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>OFFLINE ORDERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="danger">-17%</h5>
            <h3>1100</h3>
          </div>
        </div>
        <div className="item customers">
          <div className="icon">
            <span className="material-icons-sharp active">person</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>NEW CUSTOMER</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">+25%</h5>
            <h3>849</h3>
          </div>
        </div>
        <div className="item add-product">
          <div>
            <span className="material-icons-sharp active">add</span>
            <h3>Add Product</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightDashboard;
