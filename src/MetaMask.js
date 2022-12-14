import {useEffect, useState} from "react";
import { ethers } from "ethers";


function MetaMask(){
    const [provider,setProvider] = useState(null);
    const [account,setAccount] = useState(null);
   
    const connectWallet = async () =>{
        if(!window.ethereum ){
            return 
        }
        if(localStorage.getItem("providerWeb3") && localStorage.getItem("account")){
            return 
        }

        const providerWeb3 = new ethers.providers.Web3Provider(window.ethereum);
       
        const accounts =  await providerWeb3.send("eth_requestAccounts", []);
        if(accounts.length > 0){
            setProvider(providerWeb3)
            localStorage.setItem("providerWeb3",providerWeb3)
            setAccount(accounts[0]);
            localStorage.setItem("account", accounts[0]);
        }
    }

    useEffect(() =>{
         const providerWeb3 = localStorage.getItem("providerWeb3")
         if (providerWeb3){
            setProvider(providerWeb3)
         }

         const myAccount = localStorage.getItem("account")
         if(myAccount){
            setAccount(myAccount)
         }
    },[]);

    return (
        <button
            onClick = {connectWallet}
            className="owl-next btn btn--accent2 text--small text--medium btn-top-app"
            >
              {!window.ethereum &&  "Install MetaMask Wallet"}
              {window.ethereum &&  !provider && "Connect Wallet"}
              {provider && account && "Disconnect Wallet"}
            </button>
    )
}

export default MetaMask;