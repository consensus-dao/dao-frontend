function Place() {
  return (
    <div className="place-background-border">
      <div className="container section place section-container">
        <img className="cloud1" src="cloud1.png" alt="" />
        <div className="title pb-6 mr-2">
          <div>
            <h3 className="mb-9">活動時間與地點 - When and Where</h3>
            <ul>
              <li>
                時間
                <span className="pl-5">12/10（六）9:00 ~ 17:00</span>
              </li>
              <li className="pl-11">AppWorks School 4F</li>
              <li>
                地點
                <span className="pl-5">100台北市中正區仁愛路二段99號 4F</span>
              </li>
              <li>
                餐點
                <span className="pl-5">供午餐 (free lunch)</span>
              </li>
            </ul>
          </div>
          <div className="map">
            <img src="map.png" alt="" />
          </div>
        </div>
        <img className="cloud2" src="cloud2.png" alt="" />
      </div>
    </div>
  );
}

export default Place;
