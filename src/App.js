import "./css/styles.css";
import Header from "./Header.js";
import WhyCrypto from "./Why_crypto.js";
import TradeSecure from "./Trade_securely";
import Footer from "./Footer";
import Features from "./Features";
import Team from "./team";
import Roadmap from "./Roadmap";
import WhitePaper from "./WhitePaper";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <WhyCrypto></WhyCrypto>
      <Roadmap></Roadmap>
      {/* <WhitePaper></WhitePaper> */}
      <TradeSecure></TradeSecure>
      <Features></Features>
      {/* <Team></Team> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
