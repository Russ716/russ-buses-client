export const MainPage = () => {
  return (
    <>
      <h1>Login Successful</h1>
      <header className="header">
        <div className="city_cont" id="city_3_cont">
          <div className="city" id="city_3"></div>
        </div>
        <div className="city_cont" id="city_2_cont">
          <div className="city" id="city_2"></div>
        </div>
        <div className="city_cont" id="city_1_cont">
          <div className="city" id="city_1"></div>
        </div>
      </header>
      <div className="school-bus">
        <div className="label">
          <span> Welcome to Russ's Buses Rentals </span>
        </div>
        {/* <div className="tri"></div> */}
        <div className="bus-body"></div>
        <div className="curve"></div>
        <div className="front-curve"></div>

        <div className="headlight">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>

        <div className="lights">
          <div className="light1"></div>
          <div className="light2"></div>
          <div className="light3"></div>
          <div className="light4"></div>
        </div>

        <div className="windows">
          <div className="window1"></div>
          <div className="window2"></div>
          <div className="window3"></div>
          <div className="window4"></div>
          <div className="window5"></div>
        </div>

        <div className="lines">
          <div className="top">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
          </div>

          <div className="center">
            <div className="line5"></div>
            <div className="road-line"></div>
            <div className="road-line2"></div>
            <div className="line6"></div>
            <div className="line7"></div>
            <div className="line8"></div>
          </div>

          <div className="bottom">
            <div className="brown-line1"></div>
            <div className="brown-line2"></div>
            <div className="l-gray-line"></div>
            <div className="r-gray-line"></div>
          </div>
        </div>

        <div className="door"></div>
        <div className="l-wheel-curve"></div>
        <div className="r-wheel-curve"></div>
        <div className="r-b-wheel"></div>
        <div className="l-b-wheel"></div>
        <div className="l-s-wheel"></div>
        <div className="r-s-wheel"></div>
      </div>

      {/* <div className="road"></div> */}
    </>
  );
};
