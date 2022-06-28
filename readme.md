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