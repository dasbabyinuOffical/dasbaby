import React from "react";
import background6 from "./images/background-item-6.svg";
import background7 from "./images/background-item-7.svg";

class Features extends React.Component {
  render() {
    return (
      <section className="features">
        <h1>Token Features</h1>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">Token Supply</h2>
            <p className="banner__text text text--small text--regular text--muted">
              No future minting allowed in the contract. Tokens will be
              distributed to the community through giveaways, community
              interaction, and surprise airdrops.
            </p>
            <div className="road-body features-card">
              <div className="card card--secondary card--white">
                <div className="card__header">
                  <h3> Total Supply </h3>
                </div>
                <h2>10 Billion</h2>
              </div>
              <div className="card card--secondary card--white">
                <div className="card__header">
                  <h3> Community Holders</h3>
                </div>
                <h2>40%</h2>
              </div>
              <div className="card card--white card--white">
                <div className="card__header">
                  <h3>Charity </h3>
                </div>
                <h2>10%</h2>
              </div>
              <div className="card card--white card--white">
                <div className="card__header">
                  <h3>Market And Cex List</h3>
                </div>
                <h2>20%</h2>
              </div>
              <div className="card card--white card--white">
                <div className="card__header">
                  <h3>Liquidity Pool</h3>
                </div>
                <h2>30%</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">Rewards for Community</h2>
            <p className="banner__text text text--small text--regular text--muted">
              DasBaby offers rewards for Community Creation. If you have a a
              piece of art, media, or anything DasBaby related send it to
              @DasBabyInu Twitter for a chance at an airdrop.
            </p>
            <form>
              <button
                className="btn btn--accent2 text--small text--medium btn-page-app"
                formAction="http://twitter.com/DasBaby_Inu"
              >
                Twitter
              </button>
            </form>
          </div>
        </div>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">Vote on DasBaby Governance</h2>
            <p className="banner__text text text--small text--regular text--muted">
              DasBaby will slowly transition into a DAO where all governance and
              changes will be voted on through the community using the DasBaby
              token.
            </p>
          </div>
        </div>
        <div className="grid_choose">
          <div className="banner--left">
            <h2 className="banner__title">Hold and Earn</h2>
            <p className="banner__text text text--small text--regular text--muted">
              Holding certain amounts of DasBaby during a Snapshot guarantees
              you airdrops of NFTs, Future Tokens, etc.
            </p>
          </div>
        </div>
        <img
          className="background-item-6"
          src={background6}
          alt="Background item 6"
        />
        <img
          className="background-item-7"
          src={background7}
          alt="Background item 7"
        />
      </section>
    );
  }
}

export default Features;
