import { ethers } from "./ethers-6.0.esm.min.js";
import { contractAddress, factoryAbi, contractAbi } from "./constants.js";
import "./ajax-jquery.min.js";

const body = document.getElementById("body");
const connectButton = document.getElementById("connectButton");
const instanceButton = document.getElementById("instanceButton");
const submitButton = document.getElementById("submitButton");
const instanceAddressText = document.getElementById("instanceAddress");
const instanceContainer = document.getElementById("instanceContainer");
const flagContainer = document.getElementById("flag");
body.onload = loadDisplay;
connectButton.onclick = connect;
instanceButton.onclick = createInstance;
submitButton.onclick = submit;

async function loadDisplay() {
    if (typeof window.ethereum !== "undefined") {
        // Load connect button
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = signer.address;
        connectButton.innerHTML = `Connected to ${address.slice(0, 6)}...${address.slice(address.length - 4)}`;

        // Check Sepolia Network
        const { name } = await provider.getNetwork();
        if (name != "sepolia") {
            alert(
                "Pour faire les challenges, merci de vous connecter au réseau de test Sepolia et de rafraîchir la page.",
            );

            instanceContainer.classList.add("hide");
            submitButton.classList.add("hide");
            instanceButton.classList.add("hide");
        } else {
            // Load instance address
            const factory = new ethers.Contract(
                contractAddress,
                factoryAbi,
                signer,
            );
            const instanceAddress = await factory.getMyContract();
            if (
                instanceAddress == "0x0000000000000000000000000000000000000000"
            ) {
                instanceContainer.classList.add("hide");
                submitButton.classList.add("hide");
                instanceAddressText.innerHTML =
                    "0x0000000000000000000000000000000000000000";
                instanceButton.innerHTML = "Déployer une instance du contrat";
            } else {
                instanceContainer.classList.remove("hide");
                submitButton.classList.remove("hide");
                instanceButton.innerHTML = "Déployer une autre instance";
                instanceAddressText.innerHTML = instanceAddress;
            }
        }
    } else {
        instanceContainer.classList.add("hide");
        submitButton.classList.add("hide");
        instanceButton.classList.add("hide");
    }
}

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        connectButton.innerHTML = `Connected to ${signer.address.slice(0, 6)}...${signer.address.slice(signer.address.length - 4)}`;

        // Check Sepolia Network
        const { name } = await provider.getNetwork();
        if (name != "sepolia") {
            alert(
                "Pour faire les challenges, merci de vous connecter au réseau de test Sepolia",
            );
            console.error(
                "Pour faire les challenges, merci de vous connecter au réseau de test Sepolia",
            );
        }
    } else {
        connectButton.innerHTML = "Please install Metamask";
    }
}

async function createInstance() {
    console.log(`Create contract instance ...`);
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        // Check Sepolia Network
        const { name } = await provider.getNetwork();
        if (name != "sepolia") {
            alert(
                "Pour faire les challenges, merci de vous connecter au réseau de test Sepolia",
            );
            console.error(
                "Pour faire les challenges, merci de vous connecter au réseau de test Sepolia",
            );
            return false;
        }
        const signer = await provider.getSigner();
        const factory = new ethers.Contract(
            contractAddress,
            factoryAbi,
            signer,
        );
        try {
            const transactionResponse = await factory.createKeccakInstance();
            // Hey, wait for this TX to finish
            await listenForTransactionMine(transactionResponse, provider);
            const instanceAddress = await factory.getMyContract();
            //console.log(`${await instanceAddress.getOwner()}`);
            instanceAddressText.innerHTML = instanceAddress;
            console.log(`Instance created at : ${instanceAddress}`);

            // Add and remove hide class
            loadDisplay;
        } catch (error) {
            console.log(error);
        }
    }
}

async function submit() {
    if (typeof window.ethereum !== "undefined") {
        // Check if instance is created
        const provider = new ethers.BrowserProvider(window.ethereum);
        // Check Sepolia Network
        const { name } = await provider.getNetwork();
        if (name != "sepolia") {
            alert(
                "Pour faire les challenges, merci de vous connecter au réseau de test Sepolia",
            );
            console.error(
                "Pour faire les challenges, merci de vous connecter au réseau de test Sepolia",
            );
            return false;
        }
        const signer = await provider.getSigner();
        const factory = new ethers.Contract(
            contractAddress,
            factoryAbi,
            signer,
        );

        const instanceAddress = await factory.getMyContract();

        if (instanceAddress != "0x0000000000000000000000000000000000000000") {
            const contract = new ethers.Contract(
                instanceAddress,
                contractAbi,
                signer,
            );
            try {
                const contractOwner = await contract.getOwner();
                if (contractOwner == signer.address) {
                    $.ajax({
                        type: "GET",
                        url: `http://localhost:8789/request-flag/${signer.address}`,
                    }).done(function (data) {
                        console.log("Challenge réussi !!!!!");
                        console.log(
                            `Bravo, vous avez réussi ! Le flag est : ${data.flag}`,
                        );
                        flagContainer.innerHTML = `Bravo, vous avez réussi ! Le flag est : ${data.flag}`;
                    });
                }
            } catch (error) {
                console.log(error);
            }
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
