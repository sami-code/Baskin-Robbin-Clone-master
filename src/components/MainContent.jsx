import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="row">
      <div class="col-lg-12 first-img"></div>

      <div class="col-lg-5 card first-card" style={{}}>
        <img
          class="card-img-top"
          src="https://www.baskinrobbins.com/content/dam/br/img/tiles-large/w4_2020/verticaltiledesktoplarge-CCcrackle-558x600.png"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Cotton Candy Crackle</h4>
          <p class="card-text">Our NEW Flavor of the Month takes the cake.</p>
          <Link
            to="/IceCreamPage/5f39add86849001a6c23ef10"
            class="border-botto"
          >
            Check Out!
          </Link>
        </div>
      </div>
      <div
        class="col-lg-5 rightcards"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            class="card"
            style={{ width: "70%", backgroundColor: "#d8c4b798" }}
          >
            <div class="card-body">
              <h5 class="card-title">Easter</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="eventimg" style={{ width: "30%" }}>
            <img
              class="img"
              style={{ width: "100%" }}
              src="https://www.baskinrobbins.com/content/dam/br/img/moments/w4_2020/eventtiledesktop-easter-134x220.png"
              alt="event"
            />
          </div>
        </div>

        <div class="card second-card" style={{ width: "100%" }}>
          <img
            class="card-img-top"
            src="https://www.baskinrobbins.com/content/dam/br/img/tiles-small/2020_w3/didyouknowdesktop-fruitylineup-559x235.png"
            alt="Card image"
          />
          <div class="card-body">
            <h4 class="card-title">Fresh & Fruity</h4>
            <p class="card-text">
              The Freshest and frutiest ice cream you will ever find.
            </p>
            <Link to="/products" class="border-botto">
              Check Out!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
