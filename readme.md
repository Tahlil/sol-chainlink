# Solana Dapp get SOL / USD price from chainlink
This is a Solana dapp that calls oracle using chainlink to retrieve off chain data specifically SOL price in USD using [anchor framework](https://hackmd.io/@ironaddicteddog/solana-anchor-escrow)

### Prerequisite
```
node 15+
npm
rust
anchor 
mocha
```
### Instruction
1. Create ID:
```
solana-keygen new -o id.json
```
2. To airdrop sol to the account copy the pubKey address and run the following command:
```
solana airdrop 2 <copied pubKey address>
```
3. Check blanace:
```
solana balance <copied pubKey address>
```
4. Compile the program:
```
anchor build
```
5. After compiling we can retrieve the program ID:
```
solana address -k ./target/deploy/chainlink_solana_dapp-keypair.json
```
6. Copy the program ID and update on `lib.rs` (on `declare_id` marro call) and `Anchor.toml` (for the key `chainlink_solana_dapp`) files
7. Run anchor build again
8. Run the test
```
anchor test
```

This will print the current solana price in USD from chainlink.