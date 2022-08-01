import React from "react";

class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap">
        <div className="roadmap-header">
          <h2>Roadmap</h2>
          <p className="text text--standart text--regular ">
            Let’s look at the path DasBabyInu will take on it's journey to take
            over the defi world.
          </p>
        </div>
        <div className="road-body">
          <div className="card card--secondary card-red">
            <div className="card__header">
              <h3>Step 1</h3>
            </div>
            <ul>
              <li>Market warm-up</li>
              <li>Formal marketing</li>
              <li>Fublicity by professional marketing</li>
              <li>10,000 holders</li>
              <li>First Cex list</li>
            </ul>
          </div>
          <div className="card card--white card-yellow">
            <div className="card__header">
              <h3>Step 2</h3>
            </div>
            <ul>
              <li>Twitter marketing activities continue</li>
              <li>Further expand its influence </li>
              <li>100,000+holders</li>
              <li>More Cex list</li>
            </ul>
          </div>
          <div className="card card--white card-green">
            <div className="card__header">
              <h3>Step 3</h3>
            </div>
            <ul>
              <li>A partial release of Baby Town Game</li>
              <li>NFT Marketplace</li>
              <li>400,000+ holders</li>
              <li>Mainstream exchanges list</li>
            </ul>
          </div>
          <div className="card card--white card-orange">
            <div className="card__header">
              <h3>Step 4</h3>
            </div>
            <ul>
              <li>Defi and Fariming Pool</li>
              <li>SocialFi system is initially established</li>
              <li>More Parterners</li>
              <li>Cross-chain:ETH/AVAX/MATIC</li>
              <li>Public blockchain</li>
              <li>Mainstream exchanges list</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
