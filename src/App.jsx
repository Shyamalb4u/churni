import { Route, Router, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Dashboard from "./wallet/dashboard";
import Profile from "./wallet/profile";
import Refer from "./wallet/refer";
import Activation from "./wallet/activation";
import Market from "./wallet/market";
import BotActive from "./wallet/botactive";
import Coindetails from "./wallet/coindetails";
import Deposit from "./wallet/deposit";
import Withdrawal from "./wallet/withdrawal";
import Wallet from "./wallet/wallet";
import StakingDetails from "./wallet/stakingdetails";
import Portfolio from "./wallet/portfolio";
import Notification from "./wallet/notification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/buy-bot" element={<Activation />} />
        <Route path="/market-overview" element={<Market />} />
        <Route path="/bot-active" element={<BotActive />} />
        <Route path="/coin-details/:symbol" element={<Coindetails />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/staking-details" element={<StakingDetails />} />
        <Route path="/portfolio-overview" element={<Portfolio />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </>
  );
}

export default App;
