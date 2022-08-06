import React, { useState,useEffect} from "react";
import axios from "axios";
import MetaMask from "./MetaMask";
import { ethers,BigNumber } from "ethers";
import Genesis from "./Genesis.json";


const borderBrone = "1rem solid #C47222"
const borderSilver = "1rem solid #c0c0c0"

function NFT() {
  const contract = "0x74155e8E00D19083033d3f58C0BA25eAE1856f84"
  const [data,setData] = useState([])
  const [start,setStart] = useState(1);

  const page = 14;
  const loadMore = () =>{
    if (start > 1000){
      return 
    }
    const url = "http://dasbabyinu.com/nft/?start=" + start + "&&page=" + page;
    axios.get(url ).then((res) => {
      setData([...data,...res.data])
      })
    setStart(start+page);
  }

  useEffect(() => {
     loadMore()
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
          <div className="owl-prev">
            NFT Marketplace
          </div>
           <button className="owl-next btn btn--accent2 text--small text--small btn-top-app" onClick={() => {
            window.location.href = "/";
           }}>
                Back
           </button>
          <MetaMask/>
        </div>

        <div className="pages_pinterest"> 
          <div className="pages_hoc">
            {data.map((item, index) => {
              return (
                <div key={index} className="imgBox" style={ (item.id > 212) ? {border: borderBrone} : {border: borderSilver} }>
                  <img src={item.image} alt={item.name}/>
                  <p className="nftNumber">{item.name}</p>
                  
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
          <button className="owl-next btn btn-page-app" onClick={loadMore}>
                Loading More
           </button>
        </div>
      </div>
    );
}

export default NFT;