const {
  Client,
  Wallet,
  convertStringToHex,
  getBalanceChanges,
} = require("xrpl");

async function mintNFT() {
  // Connect to the XRPL Mainnet
  const xrplClient = new Client("wss://s.altnet.rippletest.net:51233");
  await xrplClient.connect();
  // if (index === 2223) {
  //   return console.log("Mint Ended");
  // }
  try {
    const issuerWallet = Wallet.fromSeed("sEdVfo37Ttej2jnCyET1xAR2tEn7Kni");
    // Get the issuer account's address
    const issuerAddress = issuerWallet.address;

    // Build the transaction

    const metadataURI =
      "ipfs://bafkreiephocicf5v2mrry5itmikk6ig3qeluwydwleobunvqrhars6qnda";

    const transactionBlob = {
      TransactionType: "NFTokenMint",
      Account: issuerAddress,
      NFTokenTaxon: 0,
      Flags: 9,
      URI: convertStringToHex(metadataURI),
    };

    const prepared = await xrplClient.autofill(transactionBlob);
    const signed = issuerWallet.sign(prepared);
    console.log(signed);

    // Sign the transaction with the issuer account's secret
    const signedTx = await xrplClient.submitAndWait(signed.tx_blob);

    console.log("NFT minted successfully!");
    console.log("Transaction hash : " + signedTx.result.hash);

    // await mintNFT(index + 1);
  } catch (error) {
    console.error("Error minting NFT:", error);
  } finally {
    xrplClient.disconnect();
  }
}

mintNFT();
