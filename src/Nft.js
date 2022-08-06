import React, { useState,useEffect } from "react";
import axios from "axios";

function NFT() {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get("http://dasbabyinu.com/nft/?start=1&&page=20").then((res) => {
      setData(res.data)
  })
  },[])

  const mintNft = () =>{

  }

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
                  <p className="nftNumber">{`Genesis-#${index}`}</p>
                  
                   {item.owner == "0" && <button
                    className="nftButton"
                    onClick={mintNft}
                  >
                   Mint
                  </button>} 
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