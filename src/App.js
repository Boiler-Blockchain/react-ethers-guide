
import './App.css';
import { useEffect, useState } from 'react';
import logo from './logo.jpg';
import {contractABI} from './contracts/Example.js';
import {contractAddress} from './Constants';
const ethers = require("ethers")

function App() {
     const [provider, setProvider] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [contractValue, setContractValue] = useState(null);
  const [inputValue, setInputValue] = useState('');


  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const newProvider = new ethers.BrowserProvider(window.ethereum)
        setProvider(newProvider);
        const accounts = await newProvider.listAccounts();
        console.log(accounts);
        setConnectedAddress(accounts[0].address);
      } else {
        throw new Error('No Ethereum provider detected');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const callContractFunction = async (func) => {
    try {
      if (!provider) {
        throw new Error('Ethereum provider not initialized');
      }
      //const contractAddress = 'YOUR_CONTRACT_ADDRESS';
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      console.log(contract);
      if (func === 'getValue') {
        const value = await contract.getValue();
        setContractValue(Number(value));
      } else if (func === 'setValue') {
        const newValue = inputValue; // change later
        await contract.setValue(newValue);
        console.log('Value set successfully');
      }
    } catch (error) {
      console.error('Error calling contract function:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-12 shadow-xl max-w-3xl w-full">
        <div className="flex items-center justify-center mb-8">
          <img src={logo} alt="Logo" className="h-32 w-32 mr-6" />
          <h1 className="text-white text-5xl font-bold">Ethers.js & React</h1>
        </div>
        {connectedAddress && (
          <div className="mb-6">
            <p className="text-white text-lg font-medium">Connected Wallet:</p>
            <p className="text-white text-xl">{connectedAddress}</p>
          </div>
        )}
        {!connectedAddress && (
          <button onClick={connectWallet} className="bg-indigo-500 text-white px-8 py-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500">Connect Wallet</button>
        )}
        {connectedAddress && (
          <div className="mt-8 flex items-center justify-center space-x-6">
            <div className="relative">
              <input type="number" className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" placeholder="Enter value" value={inputValue} onChange={handleInputChange} />
              <button onClick={() => callContractFunction('setValue')} className="absolute right-0 top-0 bottom-0 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Set</button>
            </div>
            <button onClick={() => callContractFunction('getValue')} className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500">Get Value</button>
          </div>
        )}
        {contractValue !== null && (
          <div className="mt-8">
            <p className="text-white text-lg font-medium">Contract Value:</p>
            <p className="text-white text-xl">{contractValue}</p>
          </div>
        )}
      </div>
    </div>
    

  );
}


export default App;
