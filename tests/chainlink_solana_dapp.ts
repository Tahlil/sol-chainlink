import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ChainlinkSolanaDapp } from "../target/types/chainlink_solana_dapp";

describe("chainlink_solana_dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ChainlinkSolanaDapp as Program<ChainlinkSolanaDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
