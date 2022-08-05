import React from "react";
import Logo from "./images/dasbaby_64x64.png";
import Twitter from "./images/twitter.svg";
import Telegram from "./images/telegram.svg";
import Swap from "./images/swap-white.svg";
import { Link as LinkR } from "react-scroll";
import { Link } from "react-router-dom";

class Header_top extends React.Component {
  render() {
    return (
      <div className="header_top">
        <div className="logo">
          <embed src={Logo} alt="DasBabyInu brand logo" />
          <span className="logo-topleft">DasBabyInu</span>
        </div>
        <nav className="header-nav">
          <div className="list list--inline">
            <Link to="../whitePaper">
              <li className="list__item text text--small text--regular text--white">
                WhitePaper
              </li>
            </Link>
            <LinkR to="features" spy={true} smooth={true}>
              <li className="list__item text text--small text--regular">
                Features
              </li>
            </LinkR>
          </div>
          <a
            href="http://twitter.com/DasBaby_Inu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <form>
              <button
                className="btn btn--link text text--small text--medium"
                formAction="http://twitter.com/DasBaby_Inu"
              >
                <img className="discord" alt="Twitter" src={Twitter}></img>
              </button>
            </form>
          </a>
          <a
            href="https://t.me/DasBaby_Inu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <form>
              <button
                className="btn btn--link text text--small text--medium"
                formAction="https://t.me/DasBaby_Inu"
              >
                <img className="discord" alt="Telegram" src={Telegram}></img>
              </button>
            </form>
          </a>
          <Link to="../NFT">
            <button className="btn btn--accent2 text--small text--medium btn-top-app">
              NFT
            </button>
          </Link>
          <span className="vertical-line" />
          <a
            href="https://pancakeswap.finance/swap"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="btn btn--accent text--small text--medium btn-top-right">
              Swap <embed src={Swap} className="swap" alt="swap icon"></embed>
            </button>
          </a>
          <form>
            <button
              className="btn btn--link text text--small text--medium"
              formAction="http://twitter.com/DasBaby_Inu"
            >
              <img className="discord2" alt="Twitter" src={Twitter}></img>
            </button>
          </form>
          <form>
            <button
              className="btn btn--link text text--small text--medium"
              formAction="https://t.me/t.me/DasBaby_Inu"
            >
              <img className="discord2" alt="Telegram" src={Telegram}></img>
            </button>
          </form>
          
          
          
          
        </nav>
      </div>
    );
  }
}
function dapp() {
  return <h2>dapp</h2>;
}
export default Header_top;
