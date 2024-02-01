import { ethers } from "./ethers-6.0.esm.min.js";
import { contractAddress, abi } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const instanceButton = document.getElementById("instanceButton");
connectButton.onclick = connect;
instanceButton.onclick = createInstance;

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = signer.address;
        connectButton.innerHTML = `Connected to ${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
    } else {
        connectButton.innerHTML = "Please install Metamask";
    }
}

async function getBalance() {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = signer.address;
        const balance = await provider.getBalance(address);
        console.log(
            `Current balance of the contract : ${ethers.formatEther(balance)}`,
        );
    }
}

async function createInstance() {
    console.log(`Create contract instance ...`);
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            const transactionResponse = await contract.createKeccakInstance({
                args: [signer.address],
            });
            // Hey, wait for this TX to finish
            await listenForTransactionMine(transactionResponse, provider);
            const instanceAddress = await contract.getMyContract();
            console.log(`Instance created at : ${instanceAddress}`);
        } catch (error) {
            console.log(error);
        }
    }
}

// async function createInstance() {
//     const ethAmount = document.getElementById("ethAmount").value;
//     console.log(`Funding with ${ethAmount}...`);
//     if (typeof window.ethereum !== "undefined") {
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const contract = new ethers.Contract(contractAddress, abi, signer);
//         try {
//             const transactionResponse = await contract.fund({
//                 value: ethers.parseEther(ethAmount),
//             });
//             // Hey, wait for this TX to finish
//             await listenForTransactionMine(transactionResponse, provider);
//             console.log("Done!");
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash} ...`);
    return new Promise((resolve, reject) => {
        provider.once(transactionResponse.hash, (transactionReceipt) => {
            // console.log(
            //     `Completed with ${transactionReceipt.confirmations} confirmations`,
            // );
            resolve();
        });
    });
}
