import React from "react";
import "./index.css";
import App from "./App";
import DApp from "./dApp";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainnet, DAppProvider } from "@usedapp/core";
import Stake from "./dApp_stake";
import Claim from "./dApp_claim";
import WhitePaper from "./WhitePaper";
import NFT from "./Nft";

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: "https://rpc.ankr.com/eth",
  },
};

root.render(
  <DAppProvider config={config}>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="dApp" element={<DApp />} />
        <Route path="stake" element={<Stake />} />
        <Route path="claim" element={<Claim />} />
        <Route path="WhitePaper" element={<WhitePaper />} />
        <Route path="NFT" element={<NFT />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </DAppProvider>
);
