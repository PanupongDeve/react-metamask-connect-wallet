// import Web3 from 'web3';

let instance;


class Web3Utils {
    constructor() {
        if (instance) {
            throw new Error('You can only create one instance!')
        }
        this.web3 = null;
        this._createWeb3();
        instance = this;
    }

    _createWeb3() {
        if (typeof window !== "undefined" &&  typeof window?.ethereum !== "undefined") {
            // if code run at browser, the code load web3 from MetaMask
            // window?.ethereum?.request({ method: "eth_requestAccounts" })
            // this.web3 = new Web3(window?.ethereum)
        } else {
            // if code run at server the code load web3 from infura
            const provider = new Web3.providers.HttpProvider(
                "https://rinkeby.infura.io/v3/00bbccbce8d948f98c93f2703b752d1b"
            )
        
            this.web3 = new Web3(provider);
        }
    }

    async requestAccount() {
        await window?.ethereum?.request({ method: "eth_requestAccounts" })
        this.web3 = new Web3(window?.ethereum)
    }

    async getAccount() {
        await this.requestAccount();
        const accounts =  await this.web3.eth.getAccounts();
        return accounts[0]
    }

    getWeb3() {
        return this.web3;
    }
}



export const web3Utils = new Web3Utils()

