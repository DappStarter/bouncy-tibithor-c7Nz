require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give knife fortune shoulder name riot pitch essay inner drop symptom giant'; 
let testAccounts = [
"0x8198f01a6ac0bb419d75d3d5292fe0605f647a843d9056f2ed8e254fea38d49e",
"0x76edf8868783a3b9453acc8d4f372cf946e00b2cb15e2a3ebbcd331272110213",
"0xa840466db68b4624b861f569120cb9ce2443a08adb09294d5eb3faf6a5b4c87d",
"0x3e1b33b6516cf20c35d6135b0826622e21ec3848042b0ebe780f52ae5100645e",
"0x45a3f044542daf044cf43ee9d1713c6b6b9cc30243ef85f6a48dbde880f26f13",
"0x3323b3edd08969b8bae17f724bd163280aad9d8cf5320bbba4faaf4e604dfa9f",
"0xeeaa675da8b7b9ed0cd57012c6364e94818de9d8fa1d2f6ddd748218824c1b15",
"0x45c234ae93390d2a3fb1c90919bf0578801e2c35ab86e55e1ba53548ff8c1bbd",
"0xaf79040b1dc16e098e41d806e0f4dc39bd83704fc2bab496cf29b1a44c80b071",
"0x66357efc2b80434b2dd45ff40a1b1fced045ce107cf3089c791665c5f837bace"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


