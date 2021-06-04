import React, { useState } from "react";
import style from "./contributors.module.css";
import Image from "./logo.png";
import Crypto from "./crypto.png"
import Donate from "./donate.png"
import Donator from "./donator.png"
import AdComponent from "../AdComponent/AdComponent";
import "./donation.css";
import Card from "./Card";
import Modal from "./Modal";
import names from "./names";
import { Button } from "react-bootstrap";

const Contributor = () => {
  const [vis, setvis] = useState(false);
  const [add, setadd] = useState("");
  const [crypto, setCrypto] = useState("");
  const bitclick = () => {
    setadd("1NGa7ytrUKKBANPmKaTd2Fohv5P3eemCas");
    setCrypto("Bitcoin");
    setvis(true);
  };
  const dogeclick = () => {
    setadd("DRxXza5ZRZ4YVEJCRe3qdxyaPiDvt691rZ");
    setCrypto("DogeCoin");
    setvis(true);
  };
  const ethclick = () => {
    setadd("0x16b0278a5a21ad0f7083893c6d24c5c88e29c604");
    setCrypto("Ethereum");
    setvis(true);
  };
  const onSubmit = () => {
    setvis(false);
  };
  return (
    <div>
      {vis && <Modal crypto={crypto} address={add} onSubmit={onSubmit} />}

      <div className={style["go_back"]}>
        <a className={style["header"]} href="https://projectsakura.xyz">
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
        <div className="progress-bg">
          <div className="progress-bar">
            <h3 className="raised">$33&nbsp;raised </h3>
          </div>

          <h3 className="goal">Goal: $50</h3>
        </div>

        <div
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "30px",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <h1>Methods of Donation <img src={Donate} alt="donate" width="50vh" height="50vh"></img></h1>

          <a href="https://ko-fi.com/lordshen">
            <Button danger style={{ width: "150px", height: "40px", margin: "2vh" }}>
              Ko-fi
            </Button>
          </a>
          <a href="https://paypal.me/PriyanshuPandey?locale.x=en_GB">
            <Button danger style={{ width: "150px", height: "40px", margin: "2vh" }}>
              Paypal
            </Button>
          </a>
        </div>
        <div
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "30px",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <h1>Donate using Crypto <img src={Crypto} alt="crypto" width="50vh" height="50vh"></img></h1>
          <Button
            danger
            style={{ width: "150px", height: "40px", margin: "2vh" }}
            onClick={ethclick}
          >
            Ethereum
          </Button>
          <Button
            danger
            style={{ width: "150px", height: "40px", margin: "2vh" }}
            onClick={dogeclick}
          >
            DogeCoin
          </Button>
          <Button
            danger
            style={{ width: "150px", height: "40px", margin: "2vh" }}
            onClick={bitclick}
          >
            Bitcoin
          </Button>
        </div>
        <hr style={{ width: "80%", margin: "5vh auto" }} width="1" size="500" />
        <div style={{ textAlign: "center" }}>
          <h1>Top Donators this month <img src={Donator} alt="donator" width="50vh" height="50vh"></img></h1>
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              width: "80%",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              padding: "60px 0",
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
