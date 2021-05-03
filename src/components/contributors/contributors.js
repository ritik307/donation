import style from "./contributors.module.css";
import Image from "./logo.png";
import AdComponent from "../AdComponent/AdComponent";
import "./donation.css";
import Card from "./Card";
import names from "./names";
import { Button } from "react-bootstrap";

const Contributor = () => {
  return (
    <div>
      <div className={style["go_back"]}>
        <a href="https://projectsakura.xyz">
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "20px",
              }}
              src={Image}
              alt="logo"
            />
            <div>
              <h2 className={style["Main-logo"]}>
                <span>Project</span>
                <span className={style["Sakura"]}> Sakura</span>
              </h2>
            </div>
          </div>
        </a>
      </div>

      <main style={{ minHeight: "50vh" }}>
        <div class="progress-bg">
          <div class="progress-bar">
            <h3 class="raised">$20&nbsp;raised </h3>
          </div>

          <h3 class="goal">Goal: $50</h3>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            marginTop: "70px",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <h1>Methods of Donation:</h1>
          <Button danger style={{ width: "150px", height: "40px" }}>
            <a href="https://ko-fi.com/lordshen">Ko-fi</a>
          </Button>
          <Button danger style={{ width: "150px", height: "40px" }}>
            <a href="https://paypal.me/PriyanshuPandey?locale.x=en_GB">Paypal</a>
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: "70px" }}>
          <h1>Top Donators this month</h1>
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              width: "80%",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              padding: "100px 0",
            }}
          >
            {names.map((name) => {
              return <Card name={name} />;
            })}
          </div>
        </div>
      </main>
      <center>
        <AdComponent />
      </center>
    </div>
  );
};
export default Contributor;
