import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import "./App.css";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";
import qrcode from "qrcode-generator";
import TransferBigBrain from "./components/TransferBigBrain"
import MintBigBrain from "./components/MintBigBrain"


enum BeaconConnection {
  NONE = "",
  LISTENING = "Listening to P2P channel",
  CONNECTED = "Channel connected",
  PERMISSION_REQUEST_SENT = "Permission request sent, waiting for response",
  PERMISSION_REQUEST_SUCCESS = "Wallet is connected"
}

const App = () => {
  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://edonet.smartpy.io/")
  );
  const [contract, setContract] = useState<any>(undefined);
  const [publicToken, setPublicToken] = useState<string | null>("");
  const [wallet, setWallet] = useState<any>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);
  const [storage, setStorage] = useState<number>(0);
  const [copiedPublicToken, setCopiedPublicToken] = useState<boolean>(false);
  const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("transfer");

  const contractAddress: string = "KT1SK9k1Ei7GqacRzRXuWfJqxkTz2mVGnX9w";

  const generateQrCode = (): { __html: string } => {
    const qr = qrcode(0, "L");
    qr.addData(publicToken || "");
    qr.make();

    return { __html: qr.createImgTag(4) };
  };

  if (publicToken && (!userAddress || isNaN(userBalance))) {
    return (
      <div className="main-box">
        <h1>Alexandria</h1>
        <div id="dialog">
          <header>Alexandria</header>
          <div id="content">
            <p className="text-align-center">
              <i className="fas fa-broadcast-tower"></i>&nbsp; Connecting to
              your wallet
            </p>
            <div
              dangerouslySetInnerHTML={generateQrCode()}
              className="text-align-center"
            ></div>
            <p id="public-token">
              {copiedPublicToken ? (
                <span id="public-token-copy__copied">
                  <i className="far fa-thumbs-up"></i>
                </span>
              ) : (
                <span
                  id="public-token-copy"
                  onClick={() => {
                    if (publicToken) {
                      navigator.clipboard.writeText(publicToken);
                      setCopiedPublicToken(true);
                      setTimeout(() => setCopiedPublicToken(false), 2000);
                    }
                  }}
                >
                  <i className="far fa-copy"></i>
                </span>
              )}

              <span>
                Public token: <span>{publicToken}</span>
              </span>
            </p>
            <p className="text-align-center">
              Status: {beaconConnection ? "Connected" : "Disconnected"}
            </p>
          </div>
        </div>
       
      </div>
    );
  } else if (userAddress && !isNaN(userBalance)) {
    return (
      <div className="main-box">
        <h1>Alexandria</h1>
        <div id="tabs">
          <div id="transfer" className={activeTab === "transfer" ? "active" : ""} onClick={() => setActiveTab("transfer")} >
            Transfer BB Tokens
          </div>
          {userAddress==="tz1dWSfhmngPFmXiejRnK9SEkRiJMqmN6km7"?
          <div id="contract" className={activeTab === "contract" ? "active" : ""} onClick={() => setActiveTab("contract")} >
            Mint BB Tokens
          </div>:null}
        </div>
        <div id="dialog">
          <div id="content">

              <div>
                {activeTab === "transfer" ? (
                  <div id="transfers">
                    <h3 className="text-align-center">Make a Transfer</h3>
                    <TransferBigBrain Tezos={Tezos} setUserBalance={setUserBalance} userAddress={userAddress} contract={contract} />
                  </div>
                ) : (
                  <div id="minting">
                    <h3 className="text-align-center">Mint BigBrain Tokens</h3>
                    <MintBigBrain Tezos={Tezos} setUserBalance={setUserBalance} userAddress={userAddress} contract={contract} />
                  </div>
                )}
              </div>


            
            <p>
              <i className="far fa-file-code"></i>&nbsp;

              <a
                href={`https://better-call.dev/edo2net/${contractAddress}/operations`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contractAddress}
              </a>
            </p>
            <p>
              <i className="far fa-address-card"></i>&nbsp; {userAddress}
            </p>
            <p>
              <i className="fas fa-piggy-bank"></i>&nbsp;
              {(userBalance / 1000000).toLocaleString("en-US")} ꜩ
            </p>
          </div>
          <DisconnectButton
            wallet={wallet}
            setPublicToken={setPublicToken}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            setWallet={setWallet}
            setTezos={setTezos}
            setBeaconConnection={setBeaconConnection}
          />
        </div>
      
      </div>
    );
  } else if (!publicToken && !userAddress && !userBalance) {
    return (
      <div className="main-box">
        <div className="title">
          <h1>Alexandria</h1>
        </div>
        <div id="dialog">
          <header>Transfer BigBrain Tokens</header>
          <div id="content">
            <p>Hey there!</p>
            <p>
            Welcome to Alexandria's Blockchain App! Go ahead and connect your wallet to send BB Tokens to the owners of repositories you like!
              <br />
            </p>
            <p></p>
          </div>
          <ConnectButton
            Tezos={Tezos}
            setContract={setContract}
            setPublicToken={setPublicToken}
            setWallet={setWallet}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            setStorage={setStorage}
            contractAddress={contractAddress}
            setBeaconConnection={setBeaconConnection}
            wallet={wallet}
          />
        </div>
      </div>
    );
  } else {
    return <div>An error has occurred</div>;
  }
};

export default App;