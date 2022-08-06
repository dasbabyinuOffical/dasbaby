import React, { useState,useEffect } from "react";
import Masonry from "masonry-layout";
import axios from "axios";

function NFT() {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get("http://dasbabyinu.com/nft/?start=1&&page=10").then((res) => {
      setData(res.data)
  })
  },[])

    return (
      <>
      <div>
        <div>
          <div className="owl-prev">NFT Marketplace</div>
          <form>
            <button
              className="owl-next btn btn--accent2 text--small text--medium btn-top-app"
              formAction="https://metamask.io/buy-crypto/"
            >
              Connect Wallet
            </button>
          </form>
        </div>

        <div className="pages_pinterest">
          <div className="pages_hoc">
            {data.map((item, index) => {
              return (
                <div key={index} className="imgBox">
                  <img src={item.image} />
                  <p className="nftNumber">{item.name}</p>
                  <button
                    className="nftButton"
                    onClick={() => this.getNft(index)}
                  >
                    领取人:{item.owner}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </>
    );
}

export default NFT;