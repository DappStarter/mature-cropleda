require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan random situate unlock hockey clinic blue giant'; 
let testAccounts = [
"0x7a7ad0cd75da2d1bddecb99f7869234db7ecd9f6a57df691ac5b58325cba350f",
"0xa74bdab094a37a8b697bf8135a250cd950c9414d2a4586c93ea26cfabbf5090c",
"0xda4ce960c32049f00e222465333251e3c71c7d235f2b17a7b9225bd0fd1fecd2",
"0x910149e87a9fbd24d812cbed0c59a015c673c19be209c8a382e96edb670cdef2",
"0xa2f9663be2cca6d4e9d202ca187bc10bcfc2fb08bccf2a5a84e77ca6f7fe1911",
"0xdcfbbae86f04f4581737a923138ab42b8616327abba452045a682d661ea2fdb3",
"0xd908409e0a325623cadd1b60d39388b9edcde337b743e3023be093697d92f497",
"0x3d9aeeac77c81733337be5185d02de008bef7398d8b8aca5c11186c7e259a651",
"0x4a9ffecfbeadb82a043557fc4e4ae70197e2b9ae89591a0906927352649270e1",
"0x72cd6655ec8badb09e613acba2d19d4157941fb3a35a290c8419015cee1e9193"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
