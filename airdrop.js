const solanaWeb3 = require('@solana/web3.js');

const a = (async () => {

const conn = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"), "confirmed");

const publicKey = solanaWeb3.Keypair.generate().publicKey;

let tok_amt = await conn.getBalance(publicKey);

console.log(`amt : ${tok_amt}`);

const airdrop_sign = await conn.requestAirdrop(publicKey, 2*solanaWeb3.LAMPORTS_PER_SOL);

await conn.confirmTransaction(airdrop_sign);

tok_amt = await conn.getBalance(publicKey);

console.log(`amt : ${tok_amt}`);


});

console.log(a());


