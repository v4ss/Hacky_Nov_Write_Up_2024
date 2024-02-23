const ethers = require("ethers");
const factoryAddress = "0x23959FD3269e6a351c14A765c86c2a1B807Fe306";
const factoryAbi = [
    {
        inputs: [],
        name: "createKeccakInstance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "userAddress", type: "address" },
        ],
        name: "getContractByAddress",
        outputs: [
            { internalType: "contract Keccak", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getKeccakArray",
        outputs: [
            { internalType: "contract Keccak[]", name: "", type: "address[]" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
        name: "getKeccakArrayAtIndex",
        outputs: [
            { internalType: "contract Keccak", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getMyContract",
        outputs: [
            { internalType: "contract Keccak", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const contractAbi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    { inputs: [], name: "Keccak__InvalidHash", type: "error" },
    {
        inputs: [{ internalType: "bytes32", name: "hash", type: "bytes32" }],
        name: "changeOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
];
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    res.send("Hacky'Nov Blockchain API");
});

app.get("/request-flag/:userAddress", async (req, res) => {
    const userAddress = req.params.userAddress;
    if (userAddress == factoryAddress) {
        res.send("Use your own address !");
    }

    const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // To load a factory contract
    const factory = new ethers.Contract(factoryAddress, factoryAbi, wallet);

    let userContractAddress = await factory.getContractByAddress(userAddress);

    // To load user contract
    const userContract = new ethers.Contract(
        userContractAddress,
        contractAbi,
        wallet,
    );

    let owner = await userContract.getOwner();

    if (owner == userAddress) {
        res.send(process.env.FLAG);
    } else {
        res.send("Challenge non validé");
    }
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
