# Ethers.js & React Example

This is a simple example project demonstrating how to interact with a smart contract using Ethers.js and React.

## Getting Started

1. **Clone the repository:**

```
git clone https://github.com/Boiler-Blockchain/react-ethers-guide.git
```

2. **Install dependencies:**
```
cd react-ethers-guide
npm install
```


## Usage

1. **Start the development server:**

```
npm run start
```

2. **Open your web browser:**
Open your web browser and go to [http://localhost:3000](http://localhost:3000).

## Connect Wallet

Click on the "Connect Wallet" button to connect your wallet.

## Set/Get Value

- Enter a value in the input field and click on the "Set" button to set the value in the smart contract.
- Click on the "Get Value" button to retrieve the current value from the smart contract.

## File Structure

### Contracts

- **Example.sol:** This file contains the Solidity smart contract code for the example contract used in the project. Note that this is a copy of the contract for your reference and not the contract itself. So if you make changes to it/ delete it, it won't affect the app since the contract used by the app is already deployed on Sepolia.

### src

- **contracts:** This folder contains the ABI (Application Binary Interface) of the deployed smart contract. It is used by the front end to interact with the contract.

- **constants.js:** This file contains the address of the deployed smart contract. If you make changes to the contract and redeploy it, you need to update the address here. Also, you will need to change the ABI mentioned above. You can find the ABI in remix after you compile the contract.

- **App.js:** This file contains most of the application logic and frontend code. It includes state variables for the application (`provider`, `connectedAddress`, `contractValue`) and functions to connect the wallet and interact with the smart contract (`connectWallet`, `callContractFunction`). The HTML structure of the website is defined in the return function.

### Ethers.js Documentation

For more information on how to use Ethers.js, refer to their documentation [here](https://docs.ethers.org/v5/). Note that some parts of the documentation may be outdated, so be sure to check their migration guide [here](https://docs.ethers.org/v6/migrating/) for any updates.

### Styling

Styling for the project is done using Tailwind CSS. You can learn how to use Tailwind CSS [here](https://tailwindcss.com/docs/guides/create-react-app).


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems
