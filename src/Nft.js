import React, { useState,useEffect } from "react";
import axios from "axios";
import MetaMask from "./MetaMask";
import { ethers,BigNumber } from "ethers";
import Genesis from "./Genesis.json";

function NFT() {
  const contract = "0x74155e8E00D19083033d3f58C0BA25eAE1856f84"
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("http://dasbabyinu.com/nft/?start=1&&page=14").then((res) => {
      setData(res.data)
  })
  },[])

  const mintNft = async (index) =>{
    if (!window.ethereum){
      return 
    }
    const providerWeb3 = new ethers.providers.Web3Provider(window.ethereum);
    const signer =  providerWeb3.getSigner();
    const daiContract = new ethers.Contract(contract, Genesis, providerWeb3);
    const daiContractWithSigner = daiContract.connect(signer);

    const id = BigNumber.from(index);
    const gas  = await daiContractWithSigner.estimateGas.mint(id)
    console.log("gas:",gas);
    const transaction  = await daiContractWithSigner.mint(id,{
      gasLimit: gas,
    })
    const transactionReceipt = await transaction.wait();
    console.log(transactionReceipt)
  }

    return (
      <div>
        <div>
          <div className="owl-prev">NFT Marketplace</div>
          <MetaMask/>
        </div>

        <div className="pages_pinterest"> 
          <div className="pages_hoc">
            {data.map((item, index) => {
              return (
                <div key={index} className="imgBox">
                  <img src={item.image} alt={item.name}/>
                  <p className="nftNumber">{`Genesis-#${index+1}`}</p>
                  
                   {item.owner === "0" && <button
                    className="nftButton"
                    onClick={() => mintNft(index+1)}
                  >
                   Mint
                  </button>} 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default NFT;