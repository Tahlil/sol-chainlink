import * as anchor from "@project-serum/anchor";

const CHAINLINK_FEED = "HgTtcbcmp5BeThax5AU8vg4VwK79qAvAKKFMs8txMLW6"; 
const CHAINLINK_PROGRAM_ID = "";

describe("chainlink_solana_dapp", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.chainlink_solana_dapp
  it('Queries SOL/USD Price feed', async() => {
    const resultAccount  = anchor.web3.Keypair.generate();
    await program.rpc.execute({
      accounts: {
        resultAccount: resultAccount.publicKey,
        user: provider.wallet.publicKey,
        chainlinkFeed: CHAINLINK_FEED,
        chainlinkProgram: CHAINLINK_PROGRAM_ID

      }
    })  
  })
});
