import { ListComp } from "./ListComp";

const DetailDashboard = () => {
  const data = [
    {
      key: "online_order",
      value: 3849,
      percentage: 39,
    },
    {
      key: "offline_order",
      value: 1100,
      percentage: -17,
    },
    {
      key: "new_customer",
      value: 849,
      percentage: 25,
    },
  ];

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
        {ListComp.map((el) => (
          <div key={el.key} className="item online">
            <div className="icon">{el.icon}</div>
            <div className="right">
              <div className="info">
                <h3>{el.title.toUpperCase()}</h3>
              </div>
              {
                <h5
                  className={
                    data.filter((i) => i.key === el.key)[0].percentage > 0
                      ? "success"
                      : "danger"
                  }
                >
                  {data.filter((i) => i.key === el.key)[0].percentage}%
                </h5>
              }
              <h3> {data.filter((i) => i.key === el.key)[0].value}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailDashboard;
