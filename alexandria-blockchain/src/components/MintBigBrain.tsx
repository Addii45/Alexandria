import React, { useState, Dispatch, SetStateAction } from "react";
import { TezosToolkit, WalletContract, MichelsonMap } from "@taquito/taquito";
import { char2Bytes } from '@taquito/tzip16';

const MintBigBrain = ({
  Tezos,
  setUserBalance,
  userAddress,
  contract
}: {
  Tezos: TezosToolkit;
  setUserBalance: Dispatch<SetStateAction<number>>;
  userAddress: string;
  contract: WalletContract | any;
}): JSX.Element => {
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  console.log(contract)
  const sendTransfer = async (): Promise<void> => {
    if (recipient && amount) {
      setLoading(true);
      try {


        const op = await contract.methods.mint(recipient, parseInt(amount), MichelsonMap.fromLiteral({symbol: char2Bytes("BB")}), 0).send();

        

        await op.confirmation();


      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div id="transfer-inputs">
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={e => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button
        className="button"
        disabled={!recipient && !amount}
        onClick={sendTransfer}
      >
        {loading ? (
          <span>
            <i className="fas fa-spinner fa-spin"></i>&nbsp; Please wait
          </span>
        ) : (
          <span>
            <i className="far fa-paper-plane"></i>&nbsp; Send
          </span>
        )}
      </button>
    </div>
  );
};

export default MintBigBrain;
